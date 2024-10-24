import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  business: {
    id: number;
    name: string;
    email: string;
    phone: string;
    document: string;
  }[];
};

const BusinessTable = (props: Props) => {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>email</TableHead>
            <TableHead>phone</TableHead>
            <TableHead className="text-right">document</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.business.map((business) => (
            <TableRow key={business.id}>
              <TableCell>
                <span className="font-medium line-clamp-1"> {business.id}</span>
              </TableCell>
              <TableCell>
                <span className="line-clamp-1">{business.name}</span>
              </TableCell>
              <TableCell>
                <span className="line-clamp-1">{business.email}</span>
              </TableCell>
              <TableCell>
                <span className="line-clamp-1">{business.phone}</span>
              </TableCell>
              <TableCell>
                <span className="text-right line-clamp-1">
                  {business.document}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BusinessTable;
