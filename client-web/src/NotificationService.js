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
  };

  onDisconnected = () => {
    this.dispatch({ type: 'NOTIFICATIONS_DISCONNECTED' });
    setTimeout(() => this.connect(), 500);
  }

  onMessage = (event) => {
    const data = JSON.parse(event.data);

    switch (data.type) {
      case 'MESSAGE_CREATED':
        this.dispatch({ type: 'MESSAGE_RECEIVED', content: data.content });
        return;
    }
  }

  sendMessage = (message) => {
    this.websocket.send(message);
  }

}

const notificationService = new NotificationService();

export default notificationService;
