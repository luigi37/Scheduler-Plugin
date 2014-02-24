/*
 * Copyright 2014 Red Folder Consultancy Ltd
 *   
 * Licensed under the Apache License, Version 2.0 (the "License");   
 * you may not use this file except in compliance with the License.   
 * You may obtain a copy of the License at       
 * 
 * 	http://www.apache.org/licenses/LICENSE-2.0   
 *
 * Unless required by applicable law or agreed to in writing, software   
 * distributed under the License is distributed on an "AS IS" BASIS,   
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   
 * See the License for the specific language governing permissions and   
 * limitations under the License.
 */



	function SchedulerFactory() { };

	SchedulerFactory.prototype.create = function () {
		var exec = cordova.require("cordova/exec");
			
		var Scheduler = function () {
		};
			
		Scheduler.prototype.addAlarm = function(what, when, successCallback, failureCallback) {
			return exec(	successCallback,
							failureCallback,      
							'SchedulerPlugin', 
							'addAlarm',      
							[what, when]);
		};
		
		var scheduler = new Scheduler();
		return scheduler;
		
	};
   
   	module.exports = new SchedulerFactory().create();; 



