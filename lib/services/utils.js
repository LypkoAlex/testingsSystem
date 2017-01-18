// import moment           from 'moment';
// // import analyesezManager from '../analysesManager.js';
//
// function formatDate(date) {
//     if (!date) return;
//     return moment(`${date}+00:00`).unix() * 1000;
// }

export function dumpTesting(data) {
    return data;
}

export function dumpQuestion(data) {
    return data;
}

export function dumpSpeciality(data) {
    return {
        id : data._id,
        title : data.title
    };
}

// export function dumpSample(data) {
//     return {
//         id:           data.id,
//         description:  data.description,
//         name:         data.name,
//         FASTQ1:       data.FASTQ1,
//         FASTQ2:       data.FASTQ2,
//         type:         data.type,
//         createdAt:    formatDate(data.createdAt),
//         updatedAt:    formatDate(data.updatedAt),
//         links: {
//             template: {
//                 id:    data.templateId,
//                 type: 'templates'
//             }
//         }
//     };
// }
// export function dumpWorkflow(data) {
//     return {
//         id:           data.id,
//         name:         data.name,
//         links: {
//             workflowTemplates: data.workflowTemplates.map(({id}) => {
//                 return {
//                     type: 'workflowTemplates',
//                     id
//                 };
//             })
//         }
//     };
// }
// export function dumpWorkflowTemplate(data) {
//     return {
//         id:     data.id,
//         name:   data.name,
//         params: data.params
//     };
// }
// export function dumpTemplate(data) {
//     return {
//         id:           data.id,
//         name:         data.name,
//         stranded:     data.stranded,
//         paired:       data.paired,
//         type:         data.type,
//         adapterMate1: data.adapterMate1,
//         adapterMate2: data.adapterMate2,
//         machine:      data.machine,
//         createdAt:    formatDate(data.createdAt),
//         updatedAt:    formatDate(data.updatedAt)
//     };
// }
