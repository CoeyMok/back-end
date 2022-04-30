const get = (req,res) => {
    let sql = 'SELECT * from dogs';
    let whereParams = [];
    if(Object.keys(req.query).length){
        sql += ` where `;

        let wheres = [];
        for (const key in req.query) {
            const whereStmt = `${key} = ?`;
            wheres.push(whereStmt);
            whereParams.push(req.query[key]);
        }

        sql +=  wheres.join(' AND ');

    }
    db.all(sql, whereParams, (err, result) => {
        if (err) {
            return res.status(401).end('error')
        } else {
          // do something with result
          if(result){
            return res.status(200).send({result})
          }
          else{
            return res.status(401).end('error')
          }
        }
      })
}

const getById = (req,res) => {
    db.get('SELECT * from dogs where id = ?', [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).end('error')
        } else {
          // do something with result
          if(result){
            return res.status(200).send({result})
          }
          else{
            return res.status(500).end('no record found')
          }
        }
      })
}

module.exports = {get,getById}