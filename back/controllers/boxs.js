const Box = require('../models/boxs');

exports.getAllBoxs = (req, res, next) => {
  if (req.body.city) {
    Box.findByCity(req.body.city).then(
      (boxs) => {
        res.status(200).json(boxs);
      }
    ).catch(
      () => {
        res.status(500).send(new Error('Database error!'));
      }
    );
  }
};

exports.getOneBox = (req, res, next) => {

  if (req.body.postal_code) {
    Box.findByPostalCode(req.body.postal_code).then(

      (box) => {
        if (!box) {
          return res.status(404).send(new Error('Box not found!'));
        }

        res.status(200).json(box);
      }
    ).catch(
      () => {
        res.status(500).send(new Error('Invalid key'));

      }
    )
  }
  else {
    if (req.body.district) {
      Box.findByDistrict(req.body.district).then(

        (box) => {
          if (!box) {
            return res.status(404).send(new Error('Box not found!'));
          }

          res.status(200).json(box);
        }
      ).catch(
        () => {
          res.status(500).send(new Error('Invalid key'));

        }
      )
    }
    else {

      res.status(500).send(new Error('Invalid key'));
    }

  }

};


/**
 *
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * boxs: [string] <-- array of box _postal_code
 *
 */
// exports.orderBoxs = (req, res, next) => {
//   if (!req.body.contact ||
//       !req.body.contact.firstName ||
//       !req.body.contact.lastName ||
//       !req.body.contact.address ||
//       !req.body.contact.city ||
//       !req.body.contact.email ||
//       !req.body.boxs) {
//     return res.status(400).send(new Error('Bad request!'));
//   }
//   let queries = [];
//   for (let boxPostal_code of req.body.boxs) {
//     const queryPromise = new Promise((resolve, reject) => {
//       Box.findByPostal_code(boxPostal_code).then(
//         (box) => {
//           if (!box) {
//             reject('Box not found: ' + boxPostal_code);
//           }
          
//           resolve(box);
//         }
//       ).catch(
//         () => {
//           reject('Database error!');
//         }
//       )
//     });
//     queries.push(queryPromise);
//   }
//   Promise.all(queries).then(
//     (boxs) => {
      
//       return res.status(201).json({
    
//         boxs: boxs,
//         orderpostal_code: orderPostal_code
//       })
//     }
//   ).catch(
//     (error) => {
//       return res.status(500).json(new Error(error));
//     }
//   );
