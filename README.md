# Carbon Footprint Calculator Web

Uma página web simples desenvolvida para calcular a pegada de carbono de usuários a partir de três indicadores de consumo diário e semanal:

- **Quilômetros percorridos por dia**  
- **Horas diárias utilizando dispositivos eletrônicos**  
- **Refeições com carne por semana**

O resultado é apresentado em **t CO₂e (toneladas de dióxido de carbono equivalente)**, usando estimativas médias de emissões para cada categoria.

---

## Fórmulas Utilizadas

Os cálculos usam os seguintes **fatores de emissão**, definidos em t CO₂e por unidade:

```js
// Fator de Emissão: t CO₂e por unidade
const FATOR_TRANSPORTE = 365 * 0.0002;     // por km diário
const FATOR_ELETRONICOS = 0.1 * 365 / 1000; // por hora diária
const FATOR_CARNE = 0.5 * 365 / 1000;       // por refeição semanal

> Estes valores são aproximações e servem apenas para fins educativos.

```

## Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/luscaaz/carbon-footprint-calculator-web

