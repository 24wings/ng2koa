import mongoose = require('mongoose');

// mongoose.connect('mongodb://120.77.169.182/wanviv');
// mongoose.connect('mongodb://118.89.38.111/wanviv');

mongoose.connect('mongodb://localhost/wanviv');


import {visitorModel} from './visitor';


export var db = {
  visitorModel
};
