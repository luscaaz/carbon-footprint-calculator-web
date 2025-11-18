document.getElementById('carbon-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    // Transporte: km diários
    const quilometrosPorDia = parseFloat(document.getElementById('transporte').value);
    
    // Eletrônicos: horas diárias
    const horasDeEletronicos = parseFloat(document.getElementById('eletronicos').value);
    
    // Carne: refeições por semana (converte para refeições por dia, dividindo por 7)
    const refeicoesComCarnePorSemana = parseFloat(document.getElementById('carne').value);
    const refeicoesComCarnePorDia = refeicoesComCarnePorSemana / 7;
    
    // --- 2. Fatores de Emissão (t CO₂e por ano) ---
    /* ** Observação:** Os fatores são apenas para fins ilustrativos e de demonstração. 
    Cálculos reais de pegada de carbono são muito mais complexos e variam por país, 
    tipo de veículo, tipo de carne, fonte de eletricidade, etc.
    */
    
    // Fator de Emissão: t CO₂e por unidade
    const FATOR_TRANSPORTE = 365 * 0.0002;
    const FATOR_ELETRONICOS = 0.1 * 365 / 1000;
    const FATOR_CARNE = 0.5 * 365 / 1000;
    
    // Pegada do Transporte (km diários * 365 dias * Fator de Emissão)
    let pegadaTransporte = quilometrosPorDia * FATOR_TRANSPORTE;
    
    // Pegada dos Eletrônicos (horas diárias * 365 dias * Fator de Emissão)
    let pegadaEletronicos = horasDeEletronicos * FATOR_ELETRONICOS;
    
    // Pegada da Carne (refeições diárias * 365 dias * Fator de Emissão)
    let pegadaCarne = refeicoesComCarnePorDia * FATOR_CARNE * 365;
    
    // Pegada Total (soma das categorias)
    let pegadaDeCarbonoTotal = pegadaTransporte + pegadaEletronicos + pegadaCarne;
    
    // --- Exibew Resultado ---
    const resultadoDiv = document.getElementById('resultado');
    
    if (isNaN(pegadaDeCarbonoTotal) || pegadaDeCarbonoTotal < 0) {
        resultadoDiv.innerHTML = `<p>⚠️ Por favor, insira valores válidos e positivos.</p>`;
    } else {
        resultadoDiv.innerHTML = `
            <p>Sua Pegada de Carbono Anual Estimada é de:</p>
            <span>${pegadaDeCarbonoTotal.toFixed(2)} t CO₂e</span>
            <p>(Toneladas de CO₂ equivalente)</p>
        `;
    }
});