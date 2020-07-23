import { view, LoggedInController, CData, PosterCollection, SubHeader, Select } from "./../index"


export class Home extends LoggedInController {
	title = () => "JAMSESH | HOME"
	classes = () => ['COLUMN', 'SPACED']

	init = () => {
		var Socket = new WebSocket("ws://localhost:9998/echo");
		var server = http.createServer(function(request, response) {
			console.log((new Date()) + ' Received request for ' + request.url);
			response.writeHead(404);
			response.end();
		});
		server.listen(8080, function() {
			console.log((new Date()) + ' Server is listening on port 8080');
		});
	
	}

	layout = s => [
		view("","heyoo")
	]
}
