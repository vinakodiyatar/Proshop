
import { Row, Col } from "react-bootstrap";
import Product from "../componets/Product";
import Loader from "../componets/Loader";
import Message from "../componets/Message"
//import products from  "../products.js"
import { useGetProductsQuery } from "../slices/productsApiSlice";
const HomeScreen = () => {
  const { data: products, isLoaing, error } = useGetProductsQuery();

  return (
    <>
    { isLoaing ? (<Loader/>):error ? (<Message variant='danger'>{error?.data?.message|| error.error}</Message>):(<>
    <h1>Latest Products</h1>
    <Row>
      {products && products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
    </>)}
      
    </>
  );
};

export default HomeScreen;
