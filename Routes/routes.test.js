const {server} = require('./../server');

describe('Server :', () => {
    const optionGet1 = {
        method: 'GET',
        url: '/ping',
      };
    it('should return pong when requested at path /path ', async () =>{
        const temp = await server.inject(optionGet1);
        expect(temp.statusCode).toEqual(200);
        expect(temp.result).toEqual('pong');
    });
    const postOptions1 = {
        method: 'POST',
        url: '/formData',
        payload: {
            readTime: '5 mins',
            title: 'Intro to Redux',
            date: '2019-02-13',
            message: 'Redux is a state management tool',
        }
      };
      it('should return object when sent a form data at path /formData ', async () =>{
        const temp = await server.inject(postOptions1);
        expect(temp.statusCode).toEqual(200);
        console.log(temp.result);
        expect(temp.result).toBeDefined();
    });
});