const qna = [
    {
      q: "Q1: Which of the following experts declared four tips for promoting clear plumbing systems, knowing that safe and drinkable water is a demand for nations worldwide?",
      options: ["Alfonso Fuentes", "Shiela Dutton", "Craig Reeves", "Thomas Myers"],
      answer: 3
    },
    {
      q: "Q2: Which of the following experts offered an acronym for CLEAN, which stands for “Chemical Liquids Exemplify A Nation”?",
      choices: ["Ruuki Satozaki", "Elizabeth Pearson", "Mich Phason", "Chantelle Cunnings"],
      answer: 2
    },
    {
      q: "Q3: According to the UNICEF organization (2024), which of the following is/are results from diseases aligned with poor drinking water and sanitation?",
      choices: ["environmental promotion", "age and behavior divisions", "discrimination and violence", "malnutrition and stunting"],
      answer: 3
    },
	{
      q: "Q4: Which of the following nations have experienced an extreme monopoly of cleaning materials, possibly caused by the COVID-19 pandemic?",
      choices: ["Ghana", "Iran", "Switzerland", "Poland"],
      answer: 2
    },
	{
      q: "Q5: Which of the following numbers of cases is the exact amount noted by the Metropolitan Cebu Water District?",
      choices: ["8,965", "8,974", "8,991", "8,992"],
      answer: 1
    },
  ];
  
  const q_element = document.getElementById("q");
  const o_element = document.getElementById("choices");
  const next_button = document.getElementById("next");
  const results = document.getElementById("results");
  
  let i = 0;
  let score = 0;
  
  function display_q() {
    const question = qna[i];
    q_element.innerText = question.q;
  
    o_element.innerHTML = "";
     q.options.forEach((option, index) => 
            {
                const button = document.createElement("button");
                button.textContent = option;
                button.classList.add("option-btn");
                button.onclick = () => display(index);
                o_element.appendChild(button);
            });
	}
  }
  
  function display_a(e) {
    const correct = qna[i].correct;
    if (selected.innerText === answer) {
      score++;
    }
  
    i++;
  
    if (i < 6) {
      display_q();
    } else {
      display_r();
    }
  }
  
  function display_r() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${qna.length}</p>
    `;
  }
  
  next_button.addEventListener("click", () => 
        {
            if (i < 6) 
            {
                display_a();
            }
        });

        display_a();