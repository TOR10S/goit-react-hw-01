import css from "./TransactionHistory.module.css"

export default function TransactionHistory({items}) {
    return (
        <table className={css.table}>
        <thead >
            <tr>
            <th className={css.borders}>Type</th>
            <th className={css.borders}>Amount</th>
            <th className={css.borders}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map((item) => {
            return (
                <tr key={item.id}>
                <td className={css.borders}>{item.type}</td>
                <td className={css.borders}>{item.amount}</td>
                <td className={css.borders}>{item.currency}</td>
                </tr>
            );
            })}
        </tbody>
        </table>
    );
    }
