module.exports = [
{
    method:'GET',
    path:'/ping',
    handler:function(request,h) {
        return'pong';
    }
},
{
    method:'POST',
    path:'/formData',
    handler:function(request,h) {
        return h.response(request.payload);
    }
}
];