
declare var AWSAppSyncClientVersionNumber: number;

declare var AWSAppSyncClientVersionString: interop.Reference<number>;

declare var AWSAppSyncVersionNumber: number;

declare var AWSAppSyncVersionString: interop.Reference<number>;

declare class AWSIoTMQTTClient<AWSSRWebSocketDelegate, NSStreamDelegate> extends NSObject {

	static alloc<AWSSRWebSocketDelegate, NSStreamDelegate>(): AWSIoTMQTTClient<AWSSRWebSocketDelegate, NSStreamDelegate>; // inherited from NSObject

	static new<AWSSRWebSocketDelegate, NSStreamDelegate>(): AWSIoTMQTTClient<AWSSRWebSocketDelegate, NSStreamDelegate>; // inherited from NSObject

	associatedObject: NSObject;

	autoResubscribe: boolean;

	baseReconnectTime: number;

	clientDelegate: AWSIoTMQTTClientDelegate;

	clientId: string;

	isMetricsEnabled: boolean;

	maximumReconnectTime: number;

	minimumConnectionTime: number;

	readonly mqttStatus: AWSIoTMQTTStatus;

	publishRetryThrottle: number;

	constructor(o: { delegate: AWSIoTMQTTClientDelegate; });

	connectWithClientIdCleanSessionConfigurationKeepAliveWillTopicWillMsgWillQoSWillRetainFlagStatusCallback(clientId: string, cleanSession: boolean, configuration: AWSServiceConfiguration, theKeepAliveInterval: number, willTopic: string, willMsg: NSData, willQoS: number, willRetainFlag: boolean, callback: (p1: AWSIoTMQTTStatus) => void): boolean;

	connectWithClientIdPresignedURLStatusCallback(clientId: string, presignedURL: string, callback: (p1: AWSIoTMQTTStatus) => void): boolean;

	connectWithClientIdToHostPortCleanSessionCertificateIdKeepAliveWillTopicWillMsgWillQoSWillRetainFlagStatusCallback(clientId: string, host: string, port: number, cleanSession: boolean, certificateId: string, theKeepAliveInterval: number, willTopic: string, willMsg: NSData, willQoS: number, willRetainFlag: boolean, callback: (p1: AWSIoTMQTTStatus) => void): boolean;

	disconnect(): void;

	initWithDelegate(delegate: AWSIoTMQTTClientDelegate): this;

	publishDataOnTopic(data: NSData, topic: string): void;

	publishDataQosOnTopic(data: NSData, qos: number, topic: string): void;

	publishDataQosOnTopicAckCallback(data: NSData, qos: number, topic: string, ackCallback: () => void): void;

	publishStringOnTopic(str: string, topic: string): void;

	publishStringQosOnTopic(str: string, qos: number, topic: string): void;

	publishStringQosOnTopicAckCallback(str: string, qos: number, topic: string, ackCallback: () => void): void;

	subscribeToTopicQosExtendedCallback(topic: string, qos: number, callback: (p1: NSObject, p2: string, p3: NSData) => void): void;

	subscribeToTopicQosExtendedCallbackAckCallback(topic: string, qos: number, callback: (p1: NSObject, p2: string, p3: NSData) => void, ackCallback: () => void): void;

	subscribeToTopicQosMessageCallback(topic: string, qos: number, callback: (p1: NSData) => void): void;

	subscribeToTopicQosMessageCallbackAckCallback(topic: string, qos: number, callback: (p1: NSData) => void, ackCallback: () => void): void;

	unsubscribeTopic(topic: string): void;

	unsubscribeTopicAckCallback(topic: string, ackCallback: () => void): void;
}

interface AWSIoTMQTTClientDelegate {

	connectionStatusChangedClient(status: AWSIoTMQTTStatus, client: AWSIoTMQTTClient<any, any>): void;

	receivedMessageDataOnTopic(data: NSData, topic: string): void;
}
declare var AWSIoTMQTTClientDelegate: {

	prototype: AWSIoTMQTTClientDelegate;
};

declare const enum AWSIoTMQTTQoS {

	MessageDeliveryAttemptedAtMostOnce = 0,

	MessageDeliveryAttemptedAtLeastOnce = 1
}

declare class AWSIoTMQTTQueueMessage extends NSObject {

	static alloc(): AWSIoTMQTTQueueMessage; // inherited from NSObject

	static new(): AWSIoTMQTTQueueMessage; // inherited from NSObject

	ackCallback: () => void;

	message: NSData;

	qos: number;

	topic: string;
}

declare const enum AWSIoTMQTTStatus {

	Unknown = 0,

	Connecting = 1,

	Connected = 2,

	Disconnected = 3,

	ConnectionRefused = 4,

	ConnectionError = 5,

	ProtocolError = 6
}

declare class AWSIoTMQTTTopicModel extends NSObject {

	static alloc(): AWSIoTMQTTTopicModel; // inherited from NSObject

	static new(): AWSIoTMQTTTopicModel; // inherited from NSObject

	callback: (p1: NSData) => void;

	extendedCallback: (p1: NSObject, p2: string, p3: NSData) => void;

	qos: number;

	topic: string;
}

declare class AppSyncLogHelper extends NSObject {

	static alloc(): AppSyncLogHelper; // inherited from NSObject

	static logDebugFileFuncionLine(message: string, file: string, _function: string, line: number): void;

	static logErrorFileFuncionLine(message: string, file: string, _function: string, line: number): void;

	static logInfoFileFuncionLine(message: string, file: string, _function: string, line: number): void;

	static logVerboseFileFuncionLine(message: string, file: string, _function: string, line: number): void;

	static logWarnFileFuncionLine(message: string, file: string, _function: string, line: number): void;

	static new(): AppSyncLogHelper; // inherited from NSObject
}
