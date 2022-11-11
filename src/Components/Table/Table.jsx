import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cell, headerCell } from "../Styles/styling";
import TableRow from "../TableRow";
import { contactsThunks, contactsSelector } from "../../redux";

const Table = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const container = useRef();

  const data = useSelector(contactsSelector.selectAllContacts);
  const total = useSelector(contactsSelector.selectTotal);
  const isLoading = useSelector(contactsSelector.selectIsLoading);
  const error = useSelector(contactsSelector.selectError);

  useEffect(() => {
    dispatch(contactsThunks.getContactsThunk(page));
  }, [page]);

  const handleScroll = () => {
    if (total === page) return;
    const { scrollHeight, scrollTop, clientHeight } = container.current;
    const isAtBottom = scrollHeight - scrollTop <= clientHeight;
    if (isAtBottom) setPage((page) => page + 1);
  };

  return (
    <table className="w-full  table-fixed">
      <thead className="w-fit block">
        <tr>
          <th className={`${headerCell} ${cell} rounded-tl-md `}>First Name</th>
          <th className={`${headerCell} ${cell} `}>Last Name</th>
          <th className={`${headerCell} ${cell} `}>Number</th>
          <th className={`${headerCell} ${cell} `}>City</th>
          <th className={`${headerCell} ${cell} rounded-tr-md `}>Email</th>
        </tr>
      </thead>
      <tbody
        ref={container}
        className="h-[160px] block border-green-500 border border-solid overflow-x-hidden"
        onScroll={handleScroll}
      >
        {data?.map((contact) => (
          <TableRow key={contact.id} data={contact} />
        ))}
        <tr>
          {isLoading && <td className="text-center">Loading</td>}
          {error && <td className="text-center">{error}</td>}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
