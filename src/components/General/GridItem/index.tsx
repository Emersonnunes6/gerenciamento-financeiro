import * as C from './styles'
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from 'react-icons/fa';

interface GridItemTypes {
    item: {
        id: string,
        desc: string,
        amount: number,
        expense: boolean,
    };
    onDelete: any;
}

const GridItem = ({ item, onDelete }: GridItemTypes) => {
    return (
        <>
            <C.Tr>
                <C.Td>{item.desc}</C.Td>
                <C.Td>{item.amount}</C.Td>
                <C.Td $alignCenter>
                    {item.expense ? (
                        <FaRegArrowAltCircleDown color='red' />
                    ) : (
                        <FaRegArrowAltCircleUp color='green' />
                    )}
                </C.Td>
                <C.Td $alignCenter>
                    <FaTrash onClick={() => onDelete(item.id)}/>
                </C.Td>
            </C.Tr>
        </>
    )
}

export default GridItem