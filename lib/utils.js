export default {
    promisify : (object, method) => {
        return (...args) => {
            return new Promise((res, rej) => {
                args.push((err, data) => {
                    if (err) {
                        rej(err);
                        return;
                    }
                    res(data);
                });
                object[method](...args);
            });
        };
    }
};
