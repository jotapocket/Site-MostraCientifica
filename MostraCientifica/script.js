/* Animação de entrada */
document.querySelectorAll('.rv').forEach(function (e) {
	if (!('IntersectionObserver' in window)) { e.classList.add('in'); return }
	new IntersectionObserver(function (en, ob) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); ob.unobserve(x.target) } }) }, { threshold: .15 }).observe(e)
});

/* Perguntas de cada estação: [pergunta, [opções], índice da correta, explicação] */
var QUIZ = {
	1: [
		["Qual era a base do funcionamento dos manicômios?", ["Tratamento em comunidade", "Isolamento das pessoas", "Oficinas terapêuticas"], 1, "Isolamento e preconceito extremo definiam essas instituições."],
		["Qual diagnóstico era usado sistematicamente para punir comportamentos femininos considerados inadequados?", ["Histeria", "Burnout", "Ansiedade social"], 0, "A 'histeria' servia de ferramenta para punir mulheres que fugiam do papel social esperado."],
		["Qual ODS se relaciona ao uso do diagnóstico de histeria contra as mulheres?", ["ODS 5 (Igualdade de Gênero)", "ODS 11 (Cidades)", "ODS 17 (Parcerias)"], 0, "Trata-se de uma desigualdade de gênero: o diagnóstico punia comportamentos femininos."],
		["A ausência de cuidado humanizado nos manicômios está ligada a qual ODS?", ["ODS 3 (Saúde)", "ODS 16 (Paz e Justiça)", "ODS 10 (Desigualdades)"], 0, "O ODS 3 trata de saúde e bem-estar, o que inclui um cuidado humanizado."],
		["As condições insalubres de trabalho dos profissionais dialogam com qual ODS?", ["ODS 8 (Trabalho)", "ODS 5 (Gênero)", "ODS 11 (Cidades)"], 0, "O ODS 8 trata de trabalho decente e condições adequadas para quem trabalha."],
		["Na prática, o que 'cuidar' significava nessa época?", ["Incluir a pessoa na vida da cidade", "Afastar da sociedade quem fugia do padrão", "Oferecer atendimento em casa"], 1, "O cuidado era sinônimo de afastar quem não se encaixava nos padrões."],
		["O livro-reportagem 'Holocausto Brasileiro', de Daniela Arbex, denuncia o que aconteceu em qual hospital?", ["Hospital Colônia de Barbacena (MG)", "Hospital Pedro II (RJ)", "Hospital das Clínicas (SP)"], 0, "O Hospital Colônia, em Barbacena (MG), é símbolo das violações de direitos nos manicômios brasileiros."]
	],
	2: [
		["Que questão central marca essa estação?", ["Os limites éticos do cuidado", "A criação dos CAPS", "O uso de redes sociais"], 0, "Novos tratamentos trouxeram debates éticos profundos."],
		["Quais tratamentos passam a ser usados nesse período?", ["Eletroconvulsoterapia, lobotomia e primeiros medicamentos", "Oficinas terapêuticas e CAPS", "Aplicativos de meditação"], 0, "Foi a época da eletroconvulsoterapia, da lobotomia e dos primeiros tratamentos medicamentosos."],
		["O 'choque' do título da estação faz referência a qual tratamento?", ["Eletroconvulsoterapia", "Fisioterapia", "Terapia ocupacional"], 0, "A eletroconvulsoterapia aplicava descargas elétricas controladas e gerou muitos debates éticos."],
		["O que era a lobotomia?", ["Uma cirurgia no cérebro", "Um remédio tranquilizante", "Uma terapia em grupo"], 0, "A lobotomia era uma cirurgia que cortava conexões do lobo frontal, hoje amplamente condenada."],
		["Qual é o dilema do ODS 3 nessa estação?", ["Avanço médico versus integridade do paciente", "Falta de escolas", "Poluição das cidades"], 0, "O desafio era avançar na medicina sem ferir a integridade da pessoa tratada."],
		["Por que a prescrição massiva de tranquilizantes para mulheres se liga ao ODS 5?", ["Para adequá-las às expectativas sociais da época", "Porque elas pediam mais remédios", "Porque eram maioria dos médicos"], 0, "Os remédios eram usados para garantir que as mulheres se adequassem ao papel social esperado."],
		["O que de novo chegou à saúde mental nos anos 1950?", ["Os primeiros tratamentos medicamentosos", "Os CAPS", "A Lei nº 10.216"], 0, "Os primeiros medicamentos psiquiátricos surgiram nessa época, ao lado de outros tratamentos polêmicos."]
	],
	3: [
		["Que movimento surge nesse período?", ["Movimento Antimanicomial", "Movimento Modernista", "Movimento Gamer"], 0, "Ele exigiu respeito aos direitos humanos no cuidado psiquiátrico."],
		["O que o Movimento Antimanicomial exigia?", ["Mais manicômios", "Respeito absoluto aos direitos humanos", "O fim de todo tratamento"], 1, "Exigia-se uma mudança radical na forma de cuidar, com respeito aos direitos humanos."],
		["Qual ODS se liga à defesa dos direitos dos pacientes e ao combate ao estigma?", ["ODS 10 (Redução das Desigualdades)", "ODS 8 (Trabalho)", "ODS 17 (Parcerias)"], 0, "Combater o estigma é reduzir desigualdades."],
		["A ideia de tratar na comunidade, rompendo com o isolamento, se liga a qual ODS?", ["ODS 11 (Cidades)", "ODS 5 (Gênero)", "ODS 16 (Paz e Justiça)"], 0, "O ODS 11 trata de comunidades inclusivas, e o tratamento passa a ser inserido nelas."],
		["Onde o cuidado passa a ser debatido, segundo a tabela comparativa do site?", ["Nas ruas e no movimento", "Só dentro dos hospitais", "Apenas em ambiente digital"], 0, "A localização do cuidado vai dos muros dos manicômios para as ruas e o movimento."],
		["Qual é o status do paciente na Transição (1970–2001)?", ["Objeto socialmente indesejado", "Sujeito político com voz ativa", "Produtor de cultura"], 1, "Na transição, o paciente passa a ser sujeito político, com voz ativa."],
		["Em que data se comemora o Dia Nacional da Luta Antimanicomial?", ["18 de maio", "7 de setembro", "1º de maio"], 0, "A data foi definida em 1987, no Congresso de Bauru, e é celebrada em 18 de maio."]
	],
	4: [
		["Qual lei marca a Reforma Psiquiátrica no Brasil?", ["Lei nº 10.216", "Lei nº 8.069", "Lei nº 9.394"], 0, "A Lei nº 10.216 consolidou os direitos dos pacientes."],
		["Em que ano a Lei nº 10.216 foi aprovada?", ["2001", "1988", "2015"], 0, "A lei foi sancionada em 2001, fechando o período 1990–2001."],
		["Qual foi a principal mudança trazida pela Reforma?", ["Do modelo centrado na internação para o cuidado em comunidade", "Mais leitos em manicômios", "Fim do atendimento público"], 0, "A reforma mudou definitivamente o modelo de atendimento."],
		["A garantia formal de cidadania e proteção legal liga-se a qual ODS?", ["ODS 16 (Paz, Justiça e Instituições)", "ODS 8 (Trabalho)", "ODS 11 (Cidades)"], 0, "O ODS 16 trata de justiça e de instituições que garantam direitos."],
		["A garantia estatal do acesso à saúde corresponde a qual ODS?", ["ODS 3 (Saúde)", "ODS 5 (Gênero)", "ODS 17 (Parcerias)"], 0, "O acesso universal à saúde é o foco do ODS 3."],
		["A valorização e capacitação dos profissionais de saúde mental liga-se a qual ODS?", ["ODS 8 (Trabalho)", "ODS 10 (Desigualdades)", "ODS 16 (Paz e Justiça)"], 0, "O ODS 8 envolve trabalho decente e valorização de quem trabalha."],
		["O que significa dizer que os direitos dos pacientes são 'inalienáveis'?", ["Que não podem ser retirados da pessoa", "Que valem só por um tempo", "Que dependem de autorização da família"], 0, "Direitos inalienáveis não podem ser tirados nem transferidos."]
	],
	5: [
		["Onde o cuidado acontece nos CAPS?", ["Dentro de muros fechados", "No território, junto à comunidade", "Só em hospitais distantes"], 1, "O cuidado é feito no território, fortalecendo vínculos."],
		["O que significa a sigla CAPS?", ["Centro de Atenção Psicossocial", "Casa de Apoio Psiquiátrico Seguro", "Comitê de Assistência Pública e Social"], 0, "CAPS são os Centros de Atenção Psicossocial."],
		["Quem fica no centro do cuidado nos CAPS?", ["O paciente", "O hospital", "O medicamento"], 0, "O paciente fica no centro, rodeado por família, comunidade, profissionais e elementos comunitários."],
		["Que tipo de atividade faz parte do tratamento nos CAPS?", ["Oficinas terapêuticas", "Isolamento prolongado", "Lobotomia"], 0, "O tratamento passa por oficinas terapêuticas e fortalecimento de vínculos sociais."],
		["O trabalho integrado entre profissionais, famílias e sociedade liga-se a qual ODS?", ["ODS 17 (Parcerias)", "ODS 5 (Gênero)", "ODS 8 (Trabalho)"], 0, "O ODS 17 trata de parcerias e trabalho conjunto."],
		["O atendimento inserido na rotina da comunidade liga-se a qual ODS?", ["ODS 11 (Cidades)", "ODS 16 (Paz e Justiça)", "ODS 10 (Desigualdades)"], 0, "O ODS 11 trata de comunidades e cidades inclusivas."],
		["O que o ODS 3 destaca nos CAPS?", ["Só o tratamento da doença", "A promoção ativa e contínua da saúde mental", "A internação de longa duração"], 1, "A ideia é promover saúde mental continuamente, e não apenas tratar a doença."]
	],
	6: [
		["O que é burnout?", ["Um tipo de jogo", "Esgotamento ligado à sobrecarga", "Uma lei de 2001"], 1, "É o esgotamento, muito ligado ao trabalho e à sobrecarga."],
		["Qual destes é um desafio do século XXI citado na estação?", ["Toxicidade das redes sociais", "Lobotomia", "Manicômios"], 0, "Redes sociais, mundo pós-pandemia, ansiedade e burnout são desafios atuais."],
		["Qual ODS trata da saúde mental no ambiente de trabalho?", ["ODS 8 (Trabalho)", "ODS 11 (Cidades)", "ODS 16 (Paz e Justiça)"], 0, "O ODS 8 envolve qualidade de vida e prevenção do burnout no trabalho."],
		["O que é a 'dupla jornada'?", ["Trabalho remunerado somado ao trabalho doméstico e de cuidado", "Trabalhar em dois turnos de estudo", "Ter dois empregos de carteira assinada"], 0, "É a exaustão de quem acumula o emprego com as tarefas da casa e do cuidado."],
		["Qual ODS se liga à sobrecarga feminina e à desigualdade no trabalho de cuidado?", ["ODS 5 (Igualdade de Gênero)", "ODS 3 (Saúde)", "ODS 17 (Parcerias)"], 0, "A sobrecarga feminina é uma questão de igualdade de gênero."],
		["Qual é o foco do ODS 3 na atualidade?", ["Prevenção em um mundo hiperconectado", "Construção de manicômios", "Isolamento dos pacientes"], 0, "O desafio é prevenir o adoecimento em um mundo cheio de estímulos e telas."],
		["Qual é o status do paciente no Presente (CAPS/Atual), segundo a tabela?", ["Objeto socialmente indesejado", "Cidadão de direitos e produtor de cultura", "Sujeito sem voz"], 1, "Hoje a pessoa é vista como cidadã de direitos e produtora de cultura."]
	]
};

/* Quiz com várias perguntas, placar e opções embaralhadas */
(function () {
	var box = document.querySelector('.quiz'), data = QUIZ[document.body.dataset.s];
	if (!box || !data) return;
	var i = 0, pts = 0;
	function sh(a) { for (var k = a.length - 1; k > 0; k--) { var j = Math.floor(Math.random() * (k + 1)), t = a[k]; a[k] = a[j]; a[j] = t } return a }
	function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x) e.textContent = x; return e }
	function show() {
		box.textContent = '';
		if (i >= data.length) {
			box.appendChild(el('p', 'qp', 'Resultado'));
			box.appendChild(el('p', 'sc', pts + ' de ' + data.length));
			var m = pts === data.length ? 'Perfeito! Você domina essa estação.' : pts >= data.length / 2 ? 'Muito bem! Revise a estação para chegar aos 100%.' : 'Assista às apresentações com calma e tente de novo.';
			box.appendChild(el('p', '', m));
			var r = el('button', 'nx', 'Refazer o quiz'); r.onclick = function () { i = 0; pts = 0; show() }; box.appendChild(r); return
		}
		var q = data[i];
		box.appendChild(el('p', 'qp', 'Pergunta ' + (i + 1) + ' de ' + data.length));
		var bar = el('div', 'bar'), fill = el('i'); fill.style.width = (i / data.length * 100) + '%'; bar.appendChild(fill); box.appendChild(bar);
		box.appendChild(el('h3', '', q[0]));
		var opts = sh(q[1].map(function (t, k) { return { t: t, ok: k === q[2] } })), bs = [], fb = el('p', 'fb'); fb.setAttribute('aria-live', 'polite');
		var nx = el('button', 'nx', i === data.length - 1 ? 'Ver resultado' : 'Próxima pergunta'); nx.hidden = true;
		nx.onclick = function () { i++; show() };
		opts.forEach(function (o) {
			var b = el('button', '', o.t); bs.push(b);
			b.onclick = function () {
				bs.forEach(function (x, k) { x.disabled = true; if (opts[k].ok) x.classList.add('ok') });
				if (o.ok) { pts++; fb.textContent = 'Correto! ' + q[3] } else { b.classList.add('no'); fb.textContent = 'Quase. ' + q[3] }
				nx.hidden = false; nx.focus()
			};
			box.appendChild(b)
		});
		box.appendChild(fb); box.appendChild(nx)
	}
	show()
})();