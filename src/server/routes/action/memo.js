/*!
 * Created by j on 2019-02-23.
 */

import _dob from '../../../util/dob.js'

let dob

function initDb(){
    dob = dob || _dob('memo')
    return dob
}

export default {

    get: function (req, res) {
        initDb()
        res.json(dob.get());
    },

    post: function (req, res) {
        initDb()
        let data = req.body;
        dob.set(data);
        res.json(dob.get());
    },

    del: function (req, res) {
        initDb()
        let id = req.params.id;
        dob.remove(id);
        res.json(dob.get());
    },

    focus: function(req, res){
        initDb()
        let id = req.params.id;
        dob.insert(id);
        res.json(dob.get());
    }
}