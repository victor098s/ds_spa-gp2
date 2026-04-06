import { useEffect, useState } from "react";
import "./about.css";

export default function About() {
const [texto, setTexto] = useState("Carregando história...");

useEffect(() => {
fetch("https://api.npoint.io/93bed93a99df4c91044e&quot")
.then((res) => res.json())
.then((data) => setTexto(data.texto))
.catch(() => {
setTexto(`
No Kokimoto Japanese Food, cada detalhe importa. Mais do que servir sushi, buscamos criar experiências únicas por meio de um processo cuidadoso que valoriza a tradição japonesa e a excelência em cada etapa.

Tudo começa com a seleção dos ingredientes. Trabalhamos com fornecedores confiáveis e escolhemos diariamente peixes frescos, arroz de alta qualidade e insumos autênticos. Acreditamos que a qualidade de um bom sushi nasce antes mesmo de chegar à cozinha.

O preparo do arroz é uma das etapas mais importantes. Ele é lavado cuidadosamente, cozido no ponto ideal e temperado com uma combinação equilibrada de vinagre, açúcar e sal. Esse processo garante a textura e o sabor perfeitos que servem de base para cada peça.

Na sequência, nossos chefs realizam o corte e a preparação dos ingredientes utilizando técnicas tradicionais japonesas. Cada corte é preciso e pensado para preservar o sabor, a textura e a apresentação dos alimentos.

A montagem é feita de forma totalmente artesanal. Cada sushi é preparado à mão, com atenção aos detalhes, garantindo harmonia entre os ingredientes e uma apresentação elegante.

Por fim, valorizamos a experiência do cliente. Nosso objetivo é oferecer um atendimento acolhedor e um ambiente agradável, onde cada visita se torna especial.

No Kokimoto Japanese Food, nosso processo reflete aquilo em que acreditamos: qualidade, tradição e dedicação em cada detalhe.
`);
});
}, []);

return (
<div>
<div className="hero">
<h1>Kokimoto</h1>
</div>

<div className="section">
<h2>ESSA HISTÓRIA MERECE SER CONTADA</h2>

<a href="#" className="btn">
ASSISTA NOSSA HISTÓRIA COMPLETA AQUI
</a>

<div className="text">
{texto}
</div>
</div>
</div>
);
}