// import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
// import { CategoryService } from "src/category/category.service";
// import { TransactionService } from "src/transaction/transaction.service";

// @Injectable()
// export class UserGuard implements CanActivate {
//     constructor(
//         private readonly transactionService: TransactionService,
//         private readonly categoryService: CategoryService
//     ) {} 
    
//     async canActivate(context: ExecutionContext): Promise<boolean> {
//         const req = context.switchToHttp().getRequest()
//         const { id, type } = req.params

//         let data;

//         switch (type) {
//             case 'transaction':
//                 data = await this.transactionService.findOne(id);
//                 break;
//             case 'category':
//                 data = await this.categoryService.findOne(id);
//                 break
//         }

//         const user = await req.body

//         if (data && user && data.user_id === user.user_id) {
//             return true;
//         }

//         return false;

//     }
// }