import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  tasks: {
    id: number;
    title: string;
    time: string;
    category: string;
    description: string;
    status: string;
  }[];
};

const RequestsTable = (props: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.tasks.map((request) => (
          <TableRow key={request.id}>
            <TableCell className="font-medium">{request.id}</TableCell>
            <TableCell>{request.title}</TableCell>
            <TableCell>{request.category}</TableCell>
            <TableCell className="text-right">{request.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RequestsTable;
