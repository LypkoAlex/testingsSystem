// import Base            from '../Base';
// import storage         from '../../storage';
// import { dumpSpeciality } from '../utils';
// import X               from '../../Exception';
//
// export default class Show extends Base {
//     validate(params) {
//         const rules = {
//             id: ['required'],
//             data: ['required']
//         };
//
//         return this.validator.validate(params, rules);
//     }
//
//     async execute({id, data}) {
//         const set = {
//             title : data.title
//         };
//         let specialities = await storage.specialities.show(id);
// 
//         if (!specialities) return new X({
//             fields: {},
//             code: 'WRONG_ID'
//         });
//
//         specialities = await storage.specialities.update(id, set);
//
//         return {data: dumpSpeciality(specialities)};
//     }
// }
