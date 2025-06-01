// import mongoose, { FilterQuery, Query } from 'mongoose';

// class QueryBuilder<T> {
//   public modelQuery: Query<T[], T>;
//   public query: Record<string, unknown>;

//   constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
//     this.modelQuery = modelQuery;
//     this.query = query;
//   }

//   search(searchableFields: string[]) {
//     const search = this?.query?.search;

//     if (search) {
//       this.modelQuery = this.modelQuery.find({
//         $or: searchableFields.map((field) => {
//           if (field === 'inStock') {
//             return { [field]: search === 'true' };
//           }

//           return {
//             [field]: { $regex: search, $options: 'i' },
//           } as FilterQuery<T>;
//         }),
//       });
//     }
//     return this;
//   }

//   filter() {
//     const queryObj = { ...this.query };

//     if (this.query.price) {
//       const price = Number(this.query.price);
//       if (!isNaN(price)) {
//         queryObj['price'] = { $lte: price };
//       }
//     }

//     if (this.query.price) {
//       const quantity = Number(this.query.price);
//       if (!isNaN(quantity)) {
//         queryObj['price'] = { $lte: quantity };
//       }
//     }

//     const excludeFields = ['search', 'sortBy', 'sortOrder', 'filter'];
//     excludeFields.forEach((el) => delete queryObj[el]);

//     this.modelQuery = this.modelQuery.find(queryObj);
//     return this;
//   }

//   sort() {
//     const sortBy = this?.query?.sortBy || 'createdAt';
//     const sortOrder = this?.query?.sortOrder === 'desc' ? -1 : 1;
//     this.modelQuery = this.modelQuery.sort({ [sortBy as string]: sortOrder });

//     return this;
//   }
//   async exec() {
//     return await this.modelQuery.lean().exec();
//   }
// }

// export default QueryBuilder;
