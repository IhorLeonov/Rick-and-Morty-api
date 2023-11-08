import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <button>Filter</button>
      <form action="">
        <select name="" id="">
          Select Item
        </select>
        <input type="text" placeholder="Add key words to find" />
        <button type="submit">Find</button>
      </form>
      <div>Cards</div>
      <div>Pagination</div>
    </>
  );
};

export default Home;
