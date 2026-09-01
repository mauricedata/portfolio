
        const steps = [
            "<strong>Step 1: Define & Scrutinize:</strong> I meet with stakeholders to convert vague business questions (e.g., 'Why are sales dropping?') into measurable metric queries and clear KPIs.",
            "<strong>Step 2: Extract & Clean:</strong> Using SQL and Python, I query raw data across databases, handle null/missing values, structure schemas, and eliminate anomalies.",
            "<strong>Step 3: Analyze & Model:</strong> I run exploratory analysis, statistical testing, and aggregate operations to pinpoint trends, anomalies, and statistical drivers.",
            "<strong>Step 4: Visualize & Present:</strong> I convert findings into clean BI dashboards or executive summaries, providing clear, actionable recommendations tailored to non-technical leaders."
        ];

        function showStep(index) {
            document.getElementById('tab-text').innerHTML = steps[index];
            const buttons = document.querySelectorAll('.tab-btn');
            buttons.forEach((btn, i) => {
                btn.classList.toggle('active', i === index);
            });
        }
        showStep(0);

        function filterProjects(category) {
            const cards = document.querySelectorAll('.project-card');
            const filterBtns = document.querySelectorAll('.filter-btn');

            filterBtns.forEach(btn => {
                btn.classList.toggle('active', btn.textContent.toLowerCase().includes(category));
            });

            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }