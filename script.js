const DADOS_MUNICIPIOS = {
    "2021": { "AGUIA BRANCA": "31.796.584/0001-87", "ANCHIETA": "27.142.694/0001-58", "ARACRUZ": "27.142.702/0001-66", "BAIXO GUANDU": "27.165.737/0001-10", "BARRA DE SAO FRANCISCO": "27.165.745/0001-67", "CACHOEIRO DE ITAPEMIRIM": "27.165.588/0001-90", "CARIACICA": "27.150.549/0006-23", "COLATINA": "27.165.729/0001-74", "CONCEICAO DA BARRA": "30.762.251/0001-74", "DOMINGOS MARTINS": "27.150.556/0001-10", "ECOPORANGA": "27.167.311/0001-04", "GUACUI": "30.746.224/0001-08", "IBATIBA": "27.744.150/0001-66", "IBIRACU": "30.303.948/0001-87", "ICONHA": "27.165.646/0001-85", "ITAPEMIRIM": "31.726.717/0001-49", "ITARANA": "27.104.363/0001-23", "JAGUARE": "30.704.185/0001-86", "LARANJA DA TERRA": "31.796.097/0001-14", "LINHARES": "27.167.410/0001-88", "MARATAIZES": "01.609.408/0001-28", "MARECHAL FLORIANO": "39.385.927/0001-22", "MARILANDIA": "27.744.176/0001-04", "MONTANHA": "27.174.051/0001-96", "NOVA VENECIA": "27.167.428/0001-80", "PEDRO CANARIO": "30.987.728/0001-10", "PINHEIROS": "27.174.085/0001-80", "PIUMA": "27.165.695/0001-18", "RIO NOVO DO SUL": "27.165.711/0001-72", "SANTA LEOPOLDINA": "30.651.745/0001-81", "SANTA TERESA": "30.756.812/0001-22", "SAO DOMINGOS DO NORTE": "36.350.312/0001-72", "SAO GABRIEL DA PALHA": "18.660.471/0001-91", "SAO JOSE DO CALCADO": "30.738.936/0001-85", "SERRA": "27.174.093/0019-56", "VIANA": "30.773.924/0001-91", "VILA PAVAO": "30.063.386/0001-41", "VILA VELHA": "27.165.554/0006-00", "VITORIA": "27.142.058/0009-83" },
    "2022": { "ALFREDO CHAVES": "27.142.686/0001-01", "ANCHIETA": "27.142.694/0001-58", "ARACRUZ": "27.142.702/0001-66", "ATILIO VIVACQUA": "27.165.620/0001-37", "BARRA DE SAO FRANCISCO": "27.165.745/0001-67", "BOA ESPERANCA": "30.726.320/0001-94", "BOM JESUS DO NORTE": "27.167.360/0001-39", "CARIACICA": "27.150.549/0006-23", "COLATINA": "27.165.729/0001-74", "CONCEICAO DA BARRA": "30.762.251/0001-74", "CONCEICAO DO CASTELO": "27.165.570/0001-98", "DOMINGOS MARTINS": "27.150.556/0001-10", "DORES DO RIO PRETO": "27.167.386/0001-87", "GUARAPARI": "30.805.395/0001-60", "IBATIBA": "27.744.150/0001-66", "IBITIRAMA": "31.726.490/0001-31", "ITAGUACU": "27.167.451/0001-74", "ITAPEMIRIM": "31.726.717/0001-49", "IUNA": "32.649.403/0001-52", "JAGUARE": "30.704.185/0001-86", "JOAO NEIVA": "31.776.479/0001-86", "LARANJA DA TERRA": "31.796.097/0001-14", "MANTENOPOLIS": "27.167.345/0001-90", "MARATAIZES": "45.231.010/0001-76", "MARILANDIA": "27.744.176/0001-04", "MONTANHA": "27.174.051/0001-96", "MUNIZ FREIRE": "27.165.687/0001-71", "MUQUI": "27.082.403/0001-83", "NOVA VENECIA": "27.167.428/0001-80", "PANCAS": "30.631.478/0001-80", "PINHEIROS": "27.174.085/0001-80", "PIUMA": "27.165.695/0001-18", "SAO DOMINGOS DO NORTE": "36.350.312/0001-72", "SAO JOSE DO CALCADO": "27.167.402/0001-31", "SAO MATEUS": "32.085.984/0001-47", "VARGEM ALTA": "31.723.570/0001-33", "VILA PAVAO": "30.063.386/0001-41", "VILA VELHA": "27.165.554/0006-00", "VITORIA": "27.142.058/0009-83" },
    "2023": { "AFONSO CLAUDIO": "27.165.562/0001-41", "AGUIA BRANCA": "31.796.584/0001-87", "ALEGRE": "31.442.430/0001-97", "ALTO RIO NOVO": "30.580.763/0001-10", "ANCHIETA": "27.142.694/0001-58", "ARACRUZ": "27.142.702/0001-66", "ATILIO VIVACQUA": "31.105.255/0001-42", "BOA ESPERANCA": "30.726.320/0001-94", "BOM JESUS DO NORTE": "27.167.360/0001-39", "CACHOEIRO DE ITAPEMIRIM": "27.165.588/0001-90", "CARIACICA": "27.150.549/0006-23", "CONCEICAO DO CASTELO": "27.165.570/0001-98", "FUNDAO": "27.165.182/0001-07", "GUACUI": "30.746.224/0001-08", "GUARAPARI": "30.805.395/0001-60", "IRUPI": "36.403.954/0001-92", "ITAGUACU": "27.167.451/0001-74", "JERONIMO MONTEIRO": "30.909.256/0001-87", "JOAO NEIVA": "31.776.479/0001-86", "LARANJA DA TERRA": "31.796.097/0001-14", "MARATAIZES": "01.609.408/0001-28", "MARECHAL FLORIANO": "39.385.927/0001-22", "MARILANDIA": "27.744.176/0001-04", "MIMOSO DO SUL": "27.174.119/0001-37", "MONTANHA": "27.174.051/0001-96", "MUNIZ FREIRE": "27.165.687/0001-71", "MUQUI": "27.082.403/0001-83", "NOVA VENECIA": "27.167.428/0001-80", "PANCAS": "30.631.478/0001-80", "PEDRO CANARIO": "30.987.728/0001-10", "PINHEIROS": "27.174.085/0001-80", "SANTA MARIA DE JETIBA": "18.238.321/0001-94", "SAO MATEUS": "32.085.984/0001-47", "SAO ROQUE DO CANAA": "30.047.478/0001-38", "VARGEM ALTA": "31.888.750/0001-75", "VILA PAVAO": "30.063.386/0001-41", "VILA VALERIO": "01.619.232/0001-95", "VILA VELHA": "27.165.554/0001-03", "VITORIA": "27.142.058/0009-83" }
};

const CUSTEIO = [
    "Remuneração de profissionais da educação que atuam no programa PROETI nas escolas",
    "Formação continuada de profissionais da educação vinculados às escolas participantes do PROETI",
    "Seleção de profissionais para atuarem nas escolas participantes",
    "Aquisição de produtos de manutenção e conservação",
    "Contratação de serviços para manutenção e conservação",
    "Aquisição de material de consumo para atividades de apoio ao ensino (materiais de expediente, didáticos, escolares, materiais de limpeza)",
    "aquisição de materiais de consumo e utensílios para alimentação escolar",
    "aluguel de equipamentos", "aluguel de espaços físicos", "contratação de serviços regulares",
    "Serviços públicos", "aquisição de materiais de laboratório", "compra de materiais esportivos", "transporte de alunos"
];
const CAPITAL = ["construção de instalações necessárias ao ensino", "aquisição de equipamentos", "compra de mobiliário", "acervo para biblioteca"];
const ITENS_PARA_AGRUPAR = ["aquisição de material de consumo para atividades de apoio ao ensino", "compra de materiais didáticos", "aquisição de materiais escolares"];

let editalGlobal = "", dadosFiltradosPlanilha = [], totalCusteioInicial = 0, totalCapitalInicial = 0;
const scriptURL = 'https://script.google.com/macros/s/AKfycbxbbvc3h7jDscetsxqTdcFtTp6yL1zONKjbnv6jrURPt7S3Ex820Vzr8eRnW3BGsMiq/exec';

function mascaraMoeda(event) {
    const input = event.target;
    let value = input.value.replace(/\D/g, "");
    value = (value / 100).toFixed(2) + "";
    value = value.replace(".", ",");
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    input.value = "R$ " + value;
    validarSaldos();
}

function moneyToFloat(str) {
    if (!str) return 0;
    return parseFloat(str.replace("R$", "").replace(/\./g, "").replace(",", ".").trim()) || 0;
}

function mudarTela(origem, destino) {
    document.getElementById(origem).classList.replace('tela-ativa', 'tela-oculta');
    document.getElementById(destino).classList.replace('tela-oculta', 'tela-ativa');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-edital').forEach(btn => {
        btn.onclick = () => {
            editalGlobal = btn.dataset.edital;
            document.getElementById('txt-edital-selecionado').innerText = `EDITAL PROETI: 001/${editalGlobal}`;
            const selM = document.getElementById('select-municipio');
            selM.innerHTML = '<option value="">Selecione o Município...</option>';
            Object.keys(DADOS_MUNICIPIOS[editalGlobal]).sort().forEach(m => selM.innerHTML += `<option value="${m}">${m}</option>`);
            document.getElementById('select-plano').innerHTML = '<option value="">Selecione a Parcela...</option><option value="Parcela 1">Parcela 1</option><option value="Parcela 2">Parcela 2</option><option value="Parcela 3">Parcela 3</option>';
            mudarTela('tela-2', 'tela-3');
        };
    });

    document.getElementById('form-identificacao').onsubmit = (e) => {
        e.preventDefault();
        const btn = document.getElementById('btn-carregar');
        const progressoContainer = document.getElementById('progresso-container');
        const barra = document.getElementById('barra-progresso');
        btn.style.display = "none"; progressoContainer.style.display = "block"; barra.style.width = "0%";
        let larg = 0; const intervalo = setInterval(() => { if (larg < 90) { larg += Math.random() * 10; barra.style.width = larg + "%"; } }, 200);

        fetch(scriptURL).then(r => r.json()).then(data => {
            const mun = document.getElementById('select-municipio').value;
            const par = document.getElementById('select-plano').value;
            dadosFiltradosPlanilha = data.filter(r => String(r[3]).includes(editalGlobal) && String(r[5]).toUpperCase() === mun.toUpperCase() && String(r[6]).toUpperCase() === par.toUpperCase());
            if (dadosFiltradosPlanilha.length === 0) {
                alert("Dados não encontrados.");
                btn.style.display = "block"; progressoContainer.style.display = "none"; clearInterval(intervalo);
            } else {
                barra.style.width = "100%";
                setTimeout(() => {
                    clearInterval(intervalo);
                    document.getElementById('titulo-municipio-paf').innerText = `${mun} - ${par} (Edital ${editalGlobal})`;
                    montarInterface();
                    mudarTela('tela-3', 'tela-5');
                    btn.style.display = "block"; progressoContainer.style.display = "none";
                }, 400);
            }
        });
    };
});

function montarInterface() {
    const cont = document.getElementById('container-despesas');
    cont.innerHTML = ""; totalCusteioInicial = 0; totalCapitalInicial = 0;
    
    const render = (lista, tipo, gridID) => {
        cont.innerHTML += `<div class="secao-titulo">${tipo === 'c' ? 'Custeio' : 'Capital'}</div><div id="${gridID}" class="grid-despesas"></div>`;
        const grid = document.getElementById(gridID);
        lista.forEach(nome => {
    let vOri = 0;
    if (nome.includes("(materiais de expediente")) {
        ITENS_PARA_AGRUPAR.forEach(orig => {
            const r = dadosFiltradosPlanilha.find(x => x[8].normalize("NFD").toUpperCase().trim() === orig.normalize("NFD").toUpperCase().trim());
            vOri += r ? parseFloat(String(r[9]).replace("R$", "").replace(/\./g, "").replace(",", ".").trim()) || 0 : 0;
        });
    } else {
        const r = dadosFiltradosPlanilha.find(x => x[8].normalize("NFD").toUpperCase().trim() === nome.normalize("NFD").toUpperCase().trim());
        vOri = r ? parseFloat(String(r[9]).replace("R$", "").replace(/\./g, "").replace(",", ".").trim()) || 0 : 0;
    }
            } else {
                const r = dadosFiltradosPlanilha.find(x => x[8].normalize("NFD").toUpperCase().trim() === nome.normalize("NFD").toUpperCase().trim());
                vOri = r ? parseFloat(String(r[9]).replace("R$", "").replace(/\./g, "").replace(",", ".").trim()) || 0 : 0;
            }
            if(tipo === 'c') totalCusteioInicial += vOri; else totalCapitalInicial += vOri;
            const vF = "R$ " + vOri.toLocaleString('pt-BR', {minimumFractionDigits: 2});
            grid.innerHTML += `<div class="despesa-item"><label>${nome.toUpperCase()}</label><input type="text" class="input-v" data-tipo="${tipo}" data-nome="${nome}" value="${vF}" oninput="mascaraMoeda(event)"></div>`;
        });
    };

    render(CUSTEIO, 'c', 'grid-c');
    render(CAPITAL, 'k', 'grid-k');
    validarSaldos();
}

function validarSaldos() {
    let sC = 0, sK = 0;
    document.querySelectorAll('.input-v').forEach(i => { 
        const v = moneyToFloat(i.value);
        if(i.dataset.tipo === 'c') sC += v; else sK += v; 
    });
    const dC = totalCusteioInicial - sC; const dK = totalCapitalInicial - sK;
    const ok = Math.abs(dC) < 0.05 && Math.abs(dK) < 0.05;
    
    document.getElementById('painel-valores').innerHTML = `
        <div class="card-valor" style="border-color:${Math.abs(dC)<0.05?'#28a745':'#dc3545'}"><small>CUSTEIO</small><br><strong>R$ ${sC.toLocaleString('pt-BR',{minimumFractionDigits:2})}</strong><br><span style="font-size:10px;">${Math.abs(dC)<0.05?'✓ ZERADO':'FALTA: '+dC.toLocaleString('pt-BR',{minimumFractionDigits:2})}</span></div>
        <div class="card-valor" style="border-color:${Math.abs(dK)<0.05?'#28a745':'#dc3545'}"><small>CAPITAL</small><br><strong>R$ ${sK.toLocaleString('pt-BR',{minimumFractionDigits:2})}</strong><br><span style="font-size:10px;">${Math.abs(dK)<0.05?'✓ ZERADO':'FALTA: '+dK.toLocaleString('pt-BR',{minimumFractionDigits:2})}</span></div>`;
    
    const btnF = document.getElementById('btn-finalizar');
    btnF.disabled = !ok; btnF.className = ok ? 'btn-verde' : 'btn-travado';
    document.getElementById('btn-pdf').style.display = "none";
}

document.getElementById('btn-finalizar').onclick = () => {
    document.getElementById('btn-pdf').style.display = "block";
    document.getElementById('btn-finalizar').style.display = "none";
};

document.getElementById('btn-pdf').onclick = () => {
    const { jsPDF } = window.jspdf; const doc = new jsPDF();
    const mun = document.getElementById('select-municipio').value;
    const par = document.getElementById('select-plano').value;
    const pref = document.getElementById('input-prefeito').value;
    const cnpj = DADOS_MUNICIPIOS[editalGlobal][mun] || "00.000.000/0000-00";
    const hoje = new Date().toLocaleDateString('pt-BR');

    // 1. TÍTULO PRINCIPAL (FORMATAÇÃO SOLICITADA)
    doc.setFillColor(180, 0, 0); doc.rect(10, 10, 190, 15, 'F');
    doc.setTextColor(255, 255, 255); doc.setFontSize(11); doc.setFont("helvetica", "bold");
    doc.text(`Plano de Aplicação Financeira - REFORMULAÇÃO - Edital ${editalGlobal} - ${par}`, 105, 19, { align: "center" });

    // 2. SUBTÍTULO CINZA
    doc.setTextColor(120); doc.setFontSize(8); doc.setFont("helvetica", "normal");
    doc.text(`Edital ${editalGlobal} - ${par}`, 10, 31);

    // 3. BARRA CINZA IDENTIFICAÇÃO
    doc.setFillColor(230); doc.rect(10, 34, 190, 8, 'F');
    doc.setTextColor(0); doc.setFontSize(10); doc.setFont("helvetica", "bold");
    doc.text("Identificação", 12, 40);

    // 4. DADOS DE IDENTIFICAÇÃO
    doc.setFontSize(9); doc.setFont("helvetica", "normal");
    doc.text(`Prefeitura Municipal de: ${mun}`, 10, 50); 
    doc.text(`CNPJ: ${cnpj}`, 10, 56);
    doc.text(`Plano vigente até: 31/12/2026`, 120, 50); 
    doc.text(`Data da reformulação: ${hoje}`, 120, 56);

    const getItens = (tipo) => {
        const rows = [];
        document.querySelectorAll(`.input-v[data-tipo="${tipo}"]`).forEach(i => {
            const vRef = moneyToFloat(i.value);
            let vOri = 0;
            if (i.dataset.nome.includes("(materiais de expediente")) {
                ITENS_PARA_AGRUPAR.forEach(orig => {
                    const r = dadosFiltradosPlanilha.find(x => x[8].normalize("NFD").toUpperCase().trim() === orig.normalize("NFD").toUpperCase().trim());
                    vOri += r ? parseFloat(String(r[9]).replace("R$", "").replace(/\./g, "").replace(",", ".").trim()) || 0 : 0;
                });
            } else {
                const r = dadosFiltradosPlanilha.find(x => x[8].normalize("NFD").toUpperCase().trim() === i.dataset.nome.normalize("NFD").toUpperCase().trim());
                vOri = r ? parseFloat(String(r[9]).replace("R$", "").replace(/\./g, "").replace(",", ".").trim()) || 0 : 0;
            }
            // Filtro: só aparece se original ou reformulado for > 0
            if (vRef > 0.01 || vOri > 0.01) {
                rows.push([i.dataset.nome.toUpperCase(), vOri.toLocaleString('pt-BR',{minimumFractionDigits:2}), vRef.toLocaleString('pt-BR',{minimumFractionDigits:2})]);
            }
        });
        return rows;
    };

    let currentY = 65;
    
    // TABELA CUSTEIO
    const dataC = getItens('c');
    if(dataC.length > 0) {
        doc.setFont("helvetica", "bold"); doc.text("1. DESPESAS DE CUSTEIO", 10, currentY);
        doc.autoTable({ startY: currentY + 2, head: [['Item de Despesa', 'Valor Original (R$)', 'Valor Reformulado (R$)']], body: dataC, styles: { fontSize: 7 }, headStyles: { fillColor: [0, 86, 179] } });
        currentY = doc.lastAutoTable.finalY + 10;
    }

    // TABELA CAPITAL
    const dataK = getItens('k');
    if(dataK.length > 0) {
        if(currentY > 240) { doc.addPage(); currentY = 20; }
        doc.setFont("helvetica", "bold"); doc.text("2. DESPESAS DE CAPITAL", 10, currentY);
        doc.autoTable({ startY: currentY + 2, head: [['Item de Despesa', 'Valor Original (R$)', 'Valor Reformulado (R$)']], body: dataK, styles: { fontSize: 7 }, headStyles: { fillColor: [50, 50, 50] } });
        currentY = doc.lastAutoTable.finalY + 15;
    }

    // 5. VALORES TOTAIS REFORMULADOS NO FINAL
    let totalC = 0, totalK = 0;
    document.querySelectorAll('.input-v').forEach(i => {
        if(i.dataset.tipo === 'c') totalC += moneyToFloat(i.value);
        else totalK += moneyToFloat(i.value);
    });

    if(currentY > 230) { doc.addPage(); currentY = 20; }
    doc.setFont("helvetica", "bold"); doc.setFontSize(10);
    doc.text(`Valor de Custeio Reformulado: R$ ${totalC.toLocaleString('pt-BR',{minimumFractionDigits:2})}`, 10, currentY);
    doc.text(`Valor de Capital Reformulado: R$ ${totalK.toLocaleString('pt-BR',{minimumFractionDigits:2})}`, 10, currentY + 7);

    // ASSINATURA
    doc.line(60, currentY + 30, 150, currentY + 30);
    doc.text(pref.toUpperCase(), 105, currentY + 35, { align: "center" });
    doc.setFont("helvetica", "normal"); doc.setFontSize(8);
    doc.text("Prefeito(a) Municipal / Gestor Autorizado", 105, currentY + 40, { align: "center" });

    doc.save(`PAF_REFORMULADO_${mun}_${par}.pdf`);

};


