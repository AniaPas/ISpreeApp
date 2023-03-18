import { FC } from "react";
import { ProductInterface } from "../../Store/GlobalStore";
//Recharts:
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
interface ProductsProps {
  products: ProductInterface[];
}
export const Products: FC<ProductsProps> = ({ products }) => {
  return (
    <LineChart
      width={600}
      height={300}
      data={products}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <XAxis
        dataKey='title'
        style={{
          fontSize: "0.5rem",
        }}
      />
      <YAxis
        style={{
          fontSize: "0.8rem",
        }}
      />
      <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
      <Line type='monotone' dataKey='price' stroke='#8884d8' />
      <Line type='monotone' dataKey='discountedPrice' stroke='#82ca9d' />
      <Tooltip />
    </LineChart>
  );
};
