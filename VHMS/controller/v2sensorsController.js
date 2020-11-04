
import { Object } from '../models';



class SensorController {

    static async createSensor (req,res) { 

      

        try {
            const {
               plateNumber, SensorName, Humidity,Temperature,Heat,SensorValue,xValue,yValue,zValue,Status, Location
            } = req.body;
            const newObject = {
                plateNumber, SensorName, Humidity,Temperature,Heat,SensorValue,xValue,yValue,zValue,Status, Location
            };
    
          const object = await Object.create(newObject);
            return res.status(201).json({
                message: 'created successfully',
                object
            });
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: 'something went wrong',
                error
            });

        }
    }

    static async getAll(req,res){
        try {
            const object = await Object.findAll();
        return res.status(201).json({
            status:201,
            object
        });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error: error.message,
            });
        }
        
  }

  static async getOne(req, res){
    const { id } = req.params;
    
    const foundSensor = await Object.findOne({where: {id}});
    if(!foundSensor) {
        return res.status(404).json({
            status:404,
            error: 'Sensor  not found'
        });

    } 
    return res.status(200).json({
        status: 200,
        data: {
            foundSensor,
        }
    })
  }
}


export default SensorController;