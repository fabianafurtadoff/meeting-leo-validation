
import { useState } from 'react';
import { briefingData, validationQuestions } from './data';

function App() {
  const [appState, setAppState] = useState('briefing'); // briefing, validation, summary
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentBlock = validationQuestions[currentBlockIndex];
  const totalBlocks = validationQuestions.length;
  const progress = ((currentBlockIndex) / totalBlocks) * 100;

  const handleStart = () => {
    setAppState('validation');
  };

  const handleNextBlock = () => {
    if (currentBlockIndex < totalBlocks - 1) {
      setCurrentBlockIndex(currentBlockIndex + 1);
      window.scrollTo(0, 0); // Reset scroll
    } else {
      setAppState('summary');
    }
  };

  const handlePrevBlock = () => {
    if (currentBlockIndex > 0) {
      setCurrentBlockIndex(currentBlockIndex - 1);
    } else {
      setAppState('briefing');
    }
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleCheckboxChange = (questionId, option, checked) => {
    const currentList = answers[questionId] || [];
    let newList;
    if (checked) {
      newList = [...currentList, option];
    } else {
      newList = currentList.filter(item => item !== option);
    }
    setAnswers(prev => ({ ...prev, [questionId]: newList }));
  };

  return (
    <div className="container fade-in">
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h3 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem' }}>
          Meeting Assistant
        </h3>
        <h1>{briefingData.title}</h1>
      </header>

      {appState === 'briefing' && (
        <BriefingView onStart={handleStart} data={briefingData} />
      )}

      {appState === 'validation' && (
        <>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <QuestionBlock
            block={currentBlock}
            answers={answers}
            onAnswer={handleAnswerChange}
            onCheckbox={handleCheckboxChange}
            onNext={handleNextBlock}
            onPrev={handlePrevBlock}
            isLast={currentBlockIndex === totalBlocks - 1}
          />
        </>
      )}

      {appState === 'summary' && (
        <SummaryView answers={answers} questions={validationQuestions} onRestart={() => setAppState('briefing')} />
      )}
    </div>
  );
}

const BriefingView = ({ onStart, data }) => {
  return (
    <div className="card fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2>🎯 Objetivo do Encontro</h2>
          <p style={{ fontSize: '1.2rem' }}>{data.objective}</p>
        </div>
        <div style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>
          <p>{data.date}</p>
          <p>{data.preparedBy}</p>
        </div>
      </div>

      <div className="highlight-box">
        <h3>👤 Perfil: Leonardo Furtado</h3>
        <p><strong>Cargo:</strong> {data.leonardoProfile.role}</p>
        <p><strong>Filosofia:</strong> <em>"{data.leonardoProfile.philosophy}"</em></p>
        <p><strong>Meta:</strong> {data.leonardoProfile.keyGoal}</p>
      </div>

      <div style={{ margin: '2rem 0' }}>
        <h3>🔎 Pontos Chave para Validação</h3>
        <ul>
          {data.highlights.map((h, i) => (
            <li key={i} style={{ marginBottom: '0.5rem' }}>{h}</li>
          ))}
        </ul>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }} onClick={onStart}>
          Iniciar Validação Estratégica &rarr;
        </button>
      </div>
    </div>
  );
};

const QuestionBlock = ({ block, answers, onAnswer, onCheckbox, onNext, onPrev, isLast }) => {
  return (
    <div className="card fade-in">
      <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <h2 style={{ marginBottom: '0.5rem' }}>{block.title}</h2>
        <p style={{ color: 'var(--text-secondary)' }}>{block.objective}</p>
      </div>

      <div className="questions-list">
        {block.questions.map(q => (
          <div key={q.id} style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem' }}>{q.text}</h3>

            {q.why && (
              <div className="why-box">
                💡 <strong>Por que importa:</strong> {q.why}
              </div>
            )}

            <div className="option-group">
              {q.type === 'text' && (
                <input
                  type="text"
                  className="input-field"
                  placeholder={q.placeholder || "Sua resposta..."}
                  value={answers[q.id] || ''}
                  onChange={(e) => onAnswer(q.id, e.target.value)}
                />
              )}

              {q.type === 'radio' && q.options.map((opt, idx) => (
                <label key={idx} className={`option-label ${answers[q.id] === opt ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name={q.id}
                    className="option-input"
                    value={opt}
                    checked={answers[q.id] === opt}
                    onChange={() => onAnswer(q.id, opt)}
                  />
                  {opt}
                </label>
              ))}

              {q.type === 'checkbox' && q.options.map((opt, idx) => {
                const isChecked = (answers[q.id] || []).includes(opt);
                return (
                  <label key={idx} className={`option-label ${isChecked ? 'selected' : ''}`}>
                    <input
                      type="checkbox"
                      name={q.id}
                      className="option-input"
                      value={opt}
                      checked={isChecked}
                      onChange={(e) => onCheckbox(q.id, opt, e.target.checked)}
                    />
                    {opt}
                  </label>
                );
              })}

              {q.hasInput && answers[q.id] && q.options.find(o => o.includes(answers[q.id]) || answers[q.id].includes(o))?.includes('anotar') && (
                <input
                  type="text"
                  className="input-field"
                  placeholder="Detalhar resposta..."
                  style={{ marginTop: '0.5rem' }}
                // Simplification: In a real app we'd store specific details separate from the selection
                // For now assume user types it all or we just mentally track it
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="nav-buttons">
        <button className="btn" onClick={onPrev}>&larr; Voltar</button>
        <button className="btn btn-primary" onClick={onNext}>
          {isLast ? 'Finalizar e Ver Resumo ✨' : 'Próximo &rarr;'}
        </button>
      </div>
    </div>
  );
};

const SummaryView = ({ answers, questions, onRestart }) => {
  const generateSummaryText = () => {
    let text = "*RESPOSTAS - VALIDAÇÃO ESTRATÉGICA*\n\n";
    questions.forEach(block => {
      text += `*${block.title}*\n`;
      block.questions.forEach(q => {
        const ans = answers[q.id];
        let ansText = "Não respondido";
        if (Array.isArray(ans)) ansText = ans.join(", ");
        else if (ans) ansText = ans;

        text += `> ${q.text}\nR: ${ansText}\n\n`;
      });
    });
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateSummaryText());
    alert("Resumo copiado! Agora você pode colar onde preferir.");
  };

  const handleWhatsApp = () => {
    const text = generateSummaryText();
    const encoded = encodeURIComponent(text);
    // Abre o WhatsApp para enviar a mensagem (o usuário escolhe o contato, no caso, você)
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  return (
    <div className="card fade-in">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2>✅ Obrigado, Leonardo!</h2>
        <p>Suas respostas foram registradas. Por favor, envie o resumo para a Fabiana abaixo.</p>
      </div>

      <div className="nav-buttons" style={{ marginBottom: '2rem', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <button
          className="btn btn-primary"
          onClick={handleWhatsApp}
          style={{ backgroundColor: '#25D366', color: '#fff', borderColor: '#25D366' }}
        >
          📱 Enviar para Fabiana (WhatsApp)
        </button>
        <button className="btn" onClick={handleCopy}>📋 Copiar Texto</button>
      </div>

      <details style={{ marginTop: '2rem', cursor: 'pointer' }}>
        <summary style={{ color: 'var(--text-secondary)' }}>Ver minhas respostas (clique para expandir)</summary>
        <ul className="summary-list" style={{ marginTop: '1rem' }}>
          {questions.map(block => (
            <div key={block.id}>
              <h3 style={{ color: 'var(--text-secondary)', marginTop: '2rem' }}>{block.title}</h3>
              {block.questions.map(q => (
                <li key={q.id} className="summary-item">
                  <div className="summary-q">{q.text}</div>
                  <div className="summary-a">
                    {Array.isArray(answers[q.id])
                      ? answers[q.id].join(", ")
                      : (answers[q.id] || <span style={{ opacity: 0.5 }}>-- Não respondido --</span>)
                    }
                  </div>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </details>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <button className="btn" onClick={onRestart} style={{ opacity: 0.5, fontSize: '0.9rem' }}>Voltar ao Início</button>
      </div>
    </div>
  );
};

export default App;
