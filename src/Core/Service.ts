import { Request, Response } from "express";
abstract class Service {
  protected request: Request;
  protected response: Response;
  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }
}
export default Service;
