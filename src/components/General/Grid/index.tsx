import GridItem from '../GridItem'
import * as C from './styles'

interface GridItensTypes {
    itens: Array<any>;
    setItens: any;
}

const Grid = ({ itens, setItens }: GridItensTypes) => {
    const onDelete = (ID: any) => {
        const newArray = itens.filter((transaction: any) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem('transactions', JSON.stringify(newArray))
    };

    return (
        <>
            <C.Table>
                <C.Thead>
                    <C.Tr>
                        <C.Th $width={40}>Descrição</C.Th>
                        <C.Th $width={40}>Valor</C.Th>
                        <C.Th $width={10} $alignCenter>Tipo</C.Th>
                        <C.Th $width={10} />
                    </C.Tr>
                </C.Thead>
                <C.Tbody>
                    {itens?.map((item, index) => (
                        <GridItem key={index} item={item} onDelete={onDelete} />
                    ))}
                </C.Tbody>
            </C.Table>
        </>
    )
}

export default Grid