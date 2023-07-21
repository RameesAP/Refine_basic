export interface ICategory {
  id: number;
  title: string;
}

export interface ICourse {
  id:number;
  title:string;
  status:"published"|"draft"|"rejected";
  category:{id:number};
  createdAt:string;

}
