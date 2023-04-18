export interface Repository {
  find();
  findOne(id: number);
  save(data: any);
  update(id: number, data: any);
  delete(id: number);
}