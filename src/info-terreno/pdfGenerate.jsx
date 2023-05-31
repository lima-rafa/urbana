import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";


export default function pdfGenerate(PU, murado, plano, regiao, pavimentacao, DISTCE, DIST232, DISTAVPRINC, TEST, AREA, AREAC, nome, endereco, inscricao){
    const valMinArb = AREA*PU*0.85;
    const valMaxArb = AREA*PU*1.15;
    const valAdot = AREA*PU;
    //const [PU, setPU] = useState(0);
    //(86.5032419743474*(1.70934486929428^1)*(0.733737694564042^1)*(0.999552302558991^1)*(0.999605575049191^1)*(1.0013404005809^1)*(1.83479692410796^1)*(0.985468425616682^1)*(AREA^0.154706533763915)*(1.79024737958985^1));
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const reportTitle = [
        {
            text: 'Avaliação de Imóvel para ITBI nº xx/ANO',
            fontSize: 20,
            bold: true,
            alignment: 'right',
            margin: [20,50,0,45] //left top risht bottom
        }
    ];

    const descritivo = [

		{
			style: 'tableExample',
			color: '#444',
            margin: [0,0,0,200],
			table: {
				widths: ['*', '*'],
                heights: 30,

				body: [
					['Inscrição imobiliária: '+inscricao, ''],
					['Cidade: Gravatá', 'UF: Pernambuco'],
					[{text:'Tipo do imóvel: Terreno', colSpan: 2}, {}],
                    [{text:'Finalidade da avaliação: Tributária', colSpan: 2}, {}],
					[{text:'Solicitante e/ou interessado:\n'+nome, colSpan: 2}, {}],
					[{text:'Endereço do imóvel:\n'+endereco, colSpan: 2}, {}],
                    ['Área do terreno: '+AREA+' m²', 'Área construída: '+AREAC+'m²'],
					[{text:'Metodologia:\nMetodo comparativo de dados de mercado, por inferencia estatistica.', colSpan: 2}, {}],
					[{text:'Diagnóstico mercado:\nO município encontra-se com um desempenho normal, havendo na cidade um número significativo de transações imobiliárias, com absorção considerada normal. A liquidez do imóvel avaliando é considerada como média, estando o desempenho do mercado normal.', colSpan: 2}, {}],
                    [{text:'Valor mínimo do campo de arbítrio:\n '+valMinArb.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), alignment: 'left'}, {text:'Valor máximo do campo de arbítrio:\n'+valMaxArb.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), alignment: 'left'}],
                    [{text:'Valor adotado na avaliação:\n'+valAdot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), colSpan: 2, alignment: 'center'}, {}],
				]
			}
		}
    ];

    const extra1 = [
        {
            text:'TABELA 3 – Grau de fundamentação no caso de utilização do tratamento por fatores – Item 9.2.2 – ABNT NBR 14653-2',
            margin: [0,25,0,0]
        },
        {
			style: 'tableExample',
			color: '#444',
			table: {
				widths: [30, '*', '*', '*', '*'],
                heights: 10,
				body: [
					[{text: 'ITEM', rowSpan: 2, fontSize: 10, alignment: 'center'}, {text: 'DESCRIÇÃO', rowSpan: 2, fontSize: 10, alignment: 'center'}, {text: 'GRAU', style: 'tableHeader', colSpan: 3, fontSize: 10, alignment: 'center'}, {}, {}],
                    [{},{},{text: 'I', fontSize: 10, alignment: 'center'}, {text: 'II', fontSize: 10, alignment: 'center'}, {text: 'III', fontSize: 10, alignment: 'center'}],
                    [{text: '1', fontSize: 10, alignment: 'center'}, {text: 'Caracterização do imóvel avaliando', fontSize: 10, alignment: 'center'}, {text: 'Completa quanto a todas as variáveis analisadas', fontSize: 10, alignment: 'center'}, {text: 'Completa quanto aos fatores utilizados no tratamento', fontSize: 10, alignment: 'center'}, {text: 'Adoção de situação paradigma', fontSize: 10, alignment: 'center'}],
                    [{text: '2', fontSize: 10, alignment: 'center'}, {text: 'Quantidade mínima de dados de mercado efetivamente utilizados', fontSize: 10, alignment: 'center'}, {text: '12', fontSize: 10, alignment: 'center'}, {text: '5', fontSize: 10, alignment: 'center'}, {text: '3', fontSize: 10, alignment: 'center'}],
                    [{text: '3', fontSize: 10, alignment: 'center'}, {text: 'Identificação dos dados de mercado', fontSize: 10, alignment: 'center'}, {text: 'Apresentação de informações relativas a todas as características dos dados analisadas, com foto e características observadas pelo autor do laudo.', fontSize: 10, alignment: 'center'}, {text: 'Apresentação de informações relativas a todas as características dos dados analisadas', fontSize: 10, alignment: 'center'}, {text: 'Apresentação de informações relativas a todas as características dos dados correspondentes aos fatores utilizados', fontSize: 10, alignment: 'center'}],
                    [{text: '4', fontSize: 10, alignment: 'center'}, {text: 'Intervalo admissível de ajuste para o conjunto de fatores', fontSize: 10, alignment: 'center'}, {text: '0,80 a 1,25', fontSize: 10, alignment: 'center'}, {text: '0,50 a 2,00', fontSize: 10, alignment: 'center'}, {text: '0,40 a 2,50', fontSize: 10, alignment: 'center'}],
                    [{text: ' No caso de utilização de menos de cinco dados de mercado, o intervalo admissível de ajuste é de 0,80 a 1,25,pois é desejável que, com um número menor de dados de mercado, a amostra seja heterogênea.', fontSize: 10, colSpan: 5, alignment: 'center'}, {}, {}, {}, {}]
				]
			}
		}
    ];

    const extra2 = [
        {
            text:'TABELA 4 – Enquadramento do laudo segundo seu grau de fundamentação no caso de utilização de tratamento por fatores – Item 9.2.2.2 – ABNT NBR 14653-2',
            margin: [0,25,0,0]
        },
        {
			style: 'tableExample',
			color: '#444',
			table: {
				widths: ['*', '*', '*', '*'],
                heights: 20,
				body: [
					[{text: 'GRAUS', fontSize: 10, alignment: 'center'}, {text: 'III', fontSize: 10, alignment: 'center'}, {text: 'II', fontSize: 10, alignment: 'center'}, {text: 'I', fontSize: 10, alignment: 'center'}],
                    [{text: 'Pontos mínimos', fontSize: 10, alignment: 'center'}, {text: '10', fontSize: 10, alignment: 'center'}, {text: '6', fontSize: 10, alignment: 'center'}, {text: '4', fontSize: 10, alignment: 'center'}],
                    [{text: 'Itens obrigatórios', fontSize: 10, alignment: 'center'}, {text: 'Itens 2 e 4 no grau III, com os demais no mínimo no grau II', fontSize: 10, alignment: 'center'}, {text: 'Item 2 e 4, no mínimo no grau II e os demais no mínimo no grau I', fontSize: 10, alignment: 'center'}, {text: 'Todos, no mínimo no grau I', fontSize: 10, alignment: 'center'}]
				]
			}
		}
    ];

    const extra3 = [
        {
            text:'TABELA 5 – Grau de precisão nos casos de utilização de modelos de regressão linear ou do tratamento por fatores – Item 9.2.3 – ABNT NBR 14653-2',
            margin: [0,25,0,0]
        },
        {
			style: 'tableExample',
			color: '#444',
			table: {
				widths: ['*', '*', '*', '*'],
                heights: 20,
				body: [
					[{text: 'DESCRIÇÃO', rowSpan: 2, fontSize: 10, alignment: 'center'}, {text: 'GRAU', fontSize: 10, colSpan: 3, alignment: 'center'}, {}, {}],
                    [{},{text: 'III', fontSize: 10, alignment: 'center'}, {text: 'II', fontSize: 10, alignment: 'center'}, {text: 'I', fontSize: 10, alignment: 'center'}],
                    [{text: 'Amplitude do intervalo de confiança de 80% em torno da estimativa de tendência central', fontSize: 10, alignment: 'center'}, {text: '≤ 30%', fontSize: 10, alignment: 'center'}, {text: '≤ 40%', fontSize: 10, alignment: 'center'}, {text: '≤ 50%', fontSize: 10, alignment: 'center'}]
				]
			}
		}
    ];

    const resultadoAvaliacao = [
        {
            text: 'RESULTADO DA AVALIAÇÃO:',
            fontSize: 15,
            bold: true,
            margin: [15,20,0,5]

        },
        {
            text: 'Conforme a NBR 14653-1, Avaliação de Bens, Parte-1: Procedimentos Gerais, item 3.1.9 e NBR 14653-2, Avaliação de Bens, Parte-2: Imóveis Urbanos, item B7 (Anexo B), o Campo de Arbítrio é o intervalo compreendido entre o valor máximo e o mínimo dos preços homogeneizados, efetivamente utilizados no tratamento, limitado a 15% do valor calculado, dentro do qual se pode arbitrar, pelo avaliador, o valor mais representativo do bem.',
            fontSize: 11,
            bold: false,
            margin: [15,0,0,10],
            alignment: 'justify'

        },
        {
			style: 'tableExample',
			color: '#444',
			table: {
				widths: ['*', '*', '*', '*', '*'],
                heights: 20,
				body: [
                    [{text: 'ITEM', fontSize: 10, alignment: 'center'},{text: 'Área', fontSize: 10, alignment: 'center'}, {text: 'Valor Mínimo (R$)', fontSize: 10, alignment: 'center'}, {text: 'Valor Médio (R$)', fontSize: 10, alignment: 'center'}, {text: 'Valor Máximo (R$)', fontSize: 10, alignment: 'center'}],
                    [{text: 'Terreno', fontSize: 10, alignment: 'center'}, {text: AREA, fontSize: 10, alignment: 'center'}, {text: valMinArb.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), fontSize: 10, alignment: 'center'}, {text: valAdot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), fontSize: 10, alignment: 'center'}, {text: valMaxArb.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), fontSize: 10, alignment: 'center'}]
				]
			}
		},
        {
            text: 'Acrescentou-se ao terreno o valor das benfeitorias e edificações determinando assim, o valor atual de mercado deste imóvel.',
            fontSize: 11,
            bold: false,
            margin: [15,20,0,10],
            alignment: 'justify'
        },
        {
            text: 'Os cálculos de valores do terreno, benfeitorias e edificações existentes no imóvel estão demonstrados na memória de cálculo – Anexo I, parte anexa integrante ao presente laudo de avaliação.',
            fontSize: 11,
            bold: false,
            margin: [15,5,0,10],
            alignment: 'justify'
        },
        {
            text: 'QUADRO RESUMO:',
            fontSize: 15,
            bold: true,
            margin: [15,20,0,10],
            alignment: 'center'
        },
        {
			color: '#444',
			table: {
				widths: ['*', '*', '*', '*', '*'],
                heights: 20,
				body: [
                    [{text: 'ITEM', fontSize: 10, alignment: 'center'},{text: 'Área (m²)', fontSize: 10, alignment: 'center'}, {text: 'Valor Mínimo (R$)', fontSize: 10, alignment: 'center'}, {text: 'Valor Médio (R$)', fontSize: 10, alignment: 'center'}, {text: 'Valor Máximo (R$)', fontSize: 10, alignment: 'center'}],
                    [{text: 'Terreno', fontSize: 10, alignment: 'center'}, {text: AREA, fontSize: 10, alignment: 'center'}, {text: valMinArb.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), fontSize: 10, alignment: 'center'}, {text: valAdot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), fontSize: 10, alignment: 'center'}, {text: valMaxArb.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), fontSize: 10, alignment: 'center'}],
                    [{text: 'Edificações/ Benfeitorias', fontSize: 10, alignment: 'center'}, {text: '-----', fontSize: 10, colSpan: 4, alignment: 'center'}, {}, {}, {}],
                    [{text: 'Total', fontSize: 10, alignment: 'center'}, {text: '-----', fontSize: 10, alignment: 'center'}, {text: '-----', fontSize: 10, alignment: 'center'}, {text: valAdot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), fontSize: 10, alignment: 'center'}, {text: '-----', fontSize: 10, alignment: 'center'}]
				]
			}
		}
    ];

    const conclusao = [
        {
            text: 'CONCLUSÃO:',
            fontSize: 15,
            bold: true,
            margin: [15,20,0,10]

        }
    ];

    const conclusaoCorpo = [
        {
            text: 'Ante o exposto e de acordo com a análise técnica realizada, informamos que o valor Venal mais representativo para o imóvel em questão é de '+valAdot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            fontSize: 12,
            bold: false,
            margin: [15,0,0,70],
            alignment: 'justify'
        }
    ];

    const localData = [
        {
            text: 'Gravatá, ______ de _____________ de ________.',
            fontSize: 12,
            bold: false,
            margin: [0,20,0,80],
            alignment: 'center'

        }
    ];

    const responsavel = [
        {
            text: '___________________________________',
            fontSize: 12,
            bold: false,
            margin: [0,0,0,0],
            alignment: 'center'

        },
        {
            text: 'RESPONSAVEL TÉCNICO',
            fontSize: 12,
            bold: false,
            margin: [0,0,0,0],
            alignment: 'center'
        },{
            text: 'CREA/CAU',
            fontSize: 10,
            bold: false,
            margin: [2,0,0,10],
            alignment: 'center'
        }

    ];

    const details = [
        reportTitle,
        descritivo,
        extra1,
        extra2,
        extra3,
        resultadoAvaliacao,
        conclusao,
        conclusaoCorpo,
        localData,
        responsavel
    ];

    const rodape = [
        {
            text: '___________________________________________________________________________________________',
            alignment: 'center',
            fontSize: 10,
            color: '#444',
        },
        {
            text: 'SECRETARIA DE FINANÇAS – GRAVATÁ/PE',
            alignment: 'center',
            fontSize: 8,
            color: '#444'
        },
        {
            text: 'Rua Izaltino Poggi, 265 - Prado, Gravatá - PE, CEP 55.642-160. Gravatá/PE.',
            alignment: 'center', fontSize: 8, color: '#444'
        }
    ];

    const headerAll = [
        {
            columns: [

                {
                    image: 'data:image/jpg;base64,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',
                width:150,
                margin: [35,10,0,0],
                },
                {
                    text: 'PREFEITURA DE GRAVATÁ\nSECRETARIA DE FINANÇAS',
                    alignment: 'left',
                    fontSize: 10,
                    color: '#444',
                    margin: [35,25,0,0],


                }
            ]
        }
    ];

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [50,70,50,50],
        background: [headerAll],
        content: [details],
        footer: [rodape]
    }

    pdfMake.createPdf(docDefinitions).open({}, window.open('', '_blank'));
}

/**
 *
 * const visualizarImpressao = () => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const {constImpressao} = Impressao(props);
    const documento = classeImpressao.gerarDocumento();
    pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
  }
 */
