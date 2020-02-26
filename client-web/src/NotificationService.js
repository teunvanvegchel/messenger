export class NotificationService {

  start = (dispatch) => {
    this.dispatch = dispatch;

    this.connect();
  };

  connect = () => {
    this.dispatch({ type: 'NOTIFICATIONS_CONNECTING' });

    this.websocket = new WebSocket('ws://echo.websocket.org');
    this.websocket.onopen = this.onConnected;
    this.websocket.onclose = this.onDisconnected;
    this.websocket.onmessage = this.onMessage;
  };

  onConnected = () => {
    this.dispatch({ type: 'NOTIFICATIONS_CONNECTED' });
    this.websocket.send("hi")
  };

  onDisconnected = () => {
    this.dispatch({ type: 'NOTIFICATIONS_DISCONNECTED' });
    setTimeout(() => this.connect(), 500);
  }

  onMessage = (event) => {
    this.dispatch({ type: 'NOTIFICATION_RECEIVED', data: event.data });
  }

  sendMessage = (message) => {
    this.websocket.send(message);
  }

}

const notificationService = new NotificationService();

export default notificationService;
