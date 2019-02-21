/*!
 * Created by j on 2019-02-12.
 */

// filter
import crossDomain from './filter/cross-domain'
import $404 from './filter/404'
import $500 from './filter/500'

// action
import stock from './action/stock'
import concept from './action/concept'
import logic from './action/logic'
import mashup from './action/mashup'
import news from './action/news'
import plan from './action/plan'
import replay from './action/replay'
import tags from './action/tags'

import note from './action/note'
import txt from './action/txt'

export default function(app){
    app.use(crossDomain)

    app.get('/stock/concept/:name', concept.get)
    app.get('/stock/c/:code', stock.get)
    app.post('/stock/c/:code', stock.post)
    app.get('/mashup/:code', mashup.get)
    app.get('/mashup/basic/:code', mashup.basic)
    app.get('/mashup/news/:code', mashup.news)
    app.get('/stock/plan', plan.get)
    app.post('/stock/plan', plan.post)
    app.delete('/stock/plan/:id', plan.del)
    app.get('/stock/tags/:type?', tags.get)
    app.post('/stock/tags', tags.post)
    app.delete('/stock/tags/:id', tags.del)
    app.get('/stock/replay', replay.get)
    app.post('/stock/replay', replay.post)

    app.get('/stock/logic', logic.get)
    app.post('/stock/logic', logic.post)
    app.delete('/stock/logic/:id', logic.del)
    app.get('/stock/logic/focus/:id', logic.focus)

    app.get('/stock/news', news.get)
    app.post('/stock/news', news.post)
    app.delete('/stock/news/:id', news.del)

    app.get('/note', note.get)
    app.post('/note', note.post)
    app.delete('/note/:id', note.del)

    app.get('/txt', txt.get)
    app.post('/txt', txt.post)
    app.delete('/txt/:id', txt.del)


    app.use($404)
    app.use($500)
}