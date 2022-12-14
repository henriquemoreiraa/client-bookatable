export type Tables = {
  id: String;
  table_num: Number;
  chairs: Number;
  price: Number;
  Book: Books[] | [];
};

export type Books = {
  id: String;
  name: String;
  date: String;
  hour: String;
  tableId: String;
  table: Tables;
};

export type DataBookTable = {
  name: String;
  date: String;
  hour: String;
  tableId: String;
};

export type DataNewTable = {
  table_num: Number | null;
  chairs: Number | null;
  price: Number | null;
};

export type DataEditTable = {
  id: String;
  table_numE: Number;
  chairsE: Number;
  priceE: Number;
};
