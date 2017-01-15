export default {
    promisify : (object, method) => {
        return (...args) => {
            console.log(args);
            return new Promise((res, rej) => {
                args.push((err, data) => {
                    if (err) {
                        rej(err);
                        return;
                    }
                    res(data);
                });
                console.log(args);
                object[method](...args);
            });
        };
    }
};
