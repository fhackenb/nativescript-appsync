
declare class CIAztecCodeDescriptor extends CIBarcodeDescriptor {

	static alloc(): CIAztecCodeDescriptor; // inherited from NSObject

	static descriptorWithPayloadIsCompactLayerCountDataCodewordCount(errorCorrectedPayload: NSData, isCompact: boolean, layerCount: number, dataCodewordCount: number): CIAztecCodeDescriptor;

	static new(): CIAztecCodeDescriptor; // inherited from NSObject

	readonly dataCodewordCount: number;

	readonly errorCorrectedPayload: NSData;

	readonly isCompact: boolean;

	readonly layerCount: number;

	constructor(o: { payload: NSData; isCompact: boolean; layerCount: number; dataCodewordCount: number; });

	initWithPayloadIsCompactLayerCountDataCodewordCount(errorCorrectedPayload: NSData, isCompact: boolean, layerCount: number, dataCodewordCount: number): this;
}

declare class CIBarcodeDescriptor extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CIBarcodeDescriptor; // inherited from NSObject

	static new(): CIBarcodeDescriptor; // inherited from NSObject

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class CIBlendKernel extends CIColorKernel {

	static alloc(): CIBlendKernel; // inherited from NSObject

	static kernelWithFunctionNameFromMetalLibraryDataError(name: string, data: NSData): CIBlendKernel; // inherited from CIKernel

	static kernelWithFunctionNameFromMetalLibraryDataOutputPixelFormatError(name: string, data: NSData, format: number): CIBlendKernel; // inherited from CIKernel

	static kernelWithString(string: string): CIBlendKernel; // inherited from CIKernel

	static new(): CIBlendKernel; // inherited from NSObject

	static readonly clear: CIBlendKernel;

	static readonly color: CIBlendKernel;

	static readonly colorBurn: CIBlendKernel;

	static readonly colorDodge: CIBlendKernel;

	static readonly componentAdd: CIBlendKernel;

	static readonly componentMax: CIBlendKernel;

	static readonly componentMin: CIBlendKernel;

	static readonly componentMultiply: CIBlendKernel;

	static readonly darken: CIBlendKernel;

	static readonly darkerColor: CIBlendKernel;

	static readonly destination: CIBlendKernel;

	static readonly destinationAtop: CIBlendKernel;

	static readonly destinationIn: CIBlendKernel;

	static readonly destinationOut: CIBlendKernel;

	static readonly destinationOver: CIBlendKernel;

	static readonly difference: CIBlendKernel;

	static readonly divide: CIBlendKernel;

	static readonly exclusion: CIBlendKernel;

	static readonly exclusiveOr: CIBlendKernel;

	static readonly hardLight: CIBlendKernel;

	static readonly hardMix: CIBlendKernel;

	static readonly hue: CIBlendKernel;

	static readonly lighten: CIBlendKernel;

	static readonly lighterColor: CIBlendKernel;

	static readonly linearBurn: CIBlendKernel;

	static readonly linearDodge: CIBlendKernel;

	static readonly linearLight: CIBlendKernel;

	static readonly luminosity: CIBlendKernel;

	static readonly multiply: CIBlendKernel;

	static readonly overlay: CIBlendKernel;

	static readonly pinLight: CIBlendKernel;

	static readonly saturation: CIBlendKernel;

	static readonly screen: CIBlendKernel;

	static readonly softLight: CIBlendKernel;

	static readonly source: CIBlendKernel;

	static readonly sourceAtop: CIBlendKernel;

	static readonly sourceIn: CIBlendKernel;

	static readonly sourceOut: CIBlendKernel;

	static readonly sourceOver: CIBlendKernel;

	static readonly subtract: CIBlendKernel;

	static readonly vividLight: CIBlendKernel;

	applyWithForegroundBackground(foreground: CIImage, background: CIImage): CIImage;
}

declare class CIColor extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CIColor; // inherited from NSObject

	static colorWithCGColor(c: any): CIColor;

	static colorWithRedGreenBlue(r: number, g: number, b: number): CIColor;

	static colorWithRedGreenBlueAlpha(r: number, g: number, b: number, a: number): CIColor;

	static colorWithRedGreenBlueAlphaColorSpace(r: number, g: number, b: number, a: number, colorSpace: any): CIColor;

	static colorWithRedGreenBlueColorSpace(r: number, g: number, b: number, colorSpace: any): CIColor;

	static colorWithString(representation: string): CIColor;

	static new(): CIColor; // inherited from NSObject

	readonly alpha: number;

	readonly blue: number;

	readonly colorSpace: any;

	readonly components: interop.Pointer | interop.Reference<number>;

	readonly green: number;

	readonly numberOfComponents: number;

	readonly red: number;

	readonly stringRepresentation: string;

	static readonly blackColor: CIColor;

	static readonly blueColor: CIColor;

	static readonly clearColor: CIColor;

	static readonly cyanColor: CIColor;

	static readonly grayColor: CIColor;

	static readonly greenColor: CIColor;

	static readonly magentaColor: CIColor;

	static readonly redColor: CIColor;

	static readonly whiteColor: CIColor;

	static readonly yellowColor: CIColor;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { CGColor: any; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { color: UIColor; });

	constructor(o: { red: number; green: number; blue: number; });

	constructor(o: { red: number; green: number; blue: number; alpha: number; });

	constructor(o: { red: number; green: number; blue: number; alpha: number; colorSpace: any; });

	constructor(o: { red: number; green: number; blue: number; colorSpace: any; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCGColor(c: any): this;

	initWithCoder(aDecoder: NSCoder): this;

	initWithColor(color: UIColor): this;

	initWithRedGreenBlue(r: number, g: number, b: number): this;

	initWithRedGreenBlueAlpha(r: number, g: number, b: number, a: number): this;

	initWithRedGreenBlueAlphaColorSpace(r: number, g: number, b: number, a: number, colorSpace: any): this;

	initWithRedGreenBlueColorSpace(r: number, g: number, b: number, colorSpace: any): this;
}

declare class CIColorKernel extends CIKernel {

	static alloc(): CIColorKernel; // inherited from NSObject

	static kernelWithFunctionNameFromMetalLibraryDataError(name: string, data: NSData): CIColorKernel; // inherited from CIKernel

	static kernelWithFunctionNameFromMetalLibraryDataOutputPixelFormatError(name: string, data: NSData, format: number): CIColorKernel; // inherited from CIKernel

	static kernelWithString(string: string): CIColorKernel; // inherited from CIKernel

	static new(): CIColorKernel; // inherited from NSObject

	applyWithExtentArguments(extent: CGRect, args: NSArray<any>): CIImage;
}

declare class CIContext extends NSObject {

	static alloc(): CIContext; // inherited from NSObject

	static context(): CIContext;

	static contextWithCGContextOptions(cgctx: any, options: NSDictionary<string, any>): CIContext;

	static contextWithEAGLContext(eaglContext: EAGLContext): CIContext;

	static contextWithEAGLContextOptions(eaglContext: EAGLContext, options: NSDictionary<string, any>): CIContext;

	static contextWithMTLDevice(device: MTLDevice): CIContext;

	static contextWithMTLDeviceOptions(device: MTLDevice, options: NSDictionary<string, any>): CIContext;

	static contextWithOptions(options: NSDictionary<string, any>): CIContext;

	static new(): CIContext; // inherited from NSObject

	readonly workingColorSpace: any;

	readonly workingFormat: number;

	constructor(o: { options: NSDictionary<string, any>; });

	HEIFRepresentationOfImageFormatColorSpaceOptions(image: CIImage, format: number, colorSpace: any, options: NSDictionary<string, any>): NSData;

	JPEGRepresentationOfImageColorSpaceOptions(image: CIImage, colorSpace: any, options: NSDictionary<string, any>): NSData;

	PNGRepresentationOfImageFormatColorSpaceOptions(image: CIImage, format: number, colorSpace: any, options: NSDictionary<string, any>): NSData;

	TIFFRepresentationOfImageFormatColorSpaceOptions(image: CIImage, format: number, colorSpace: any, options: NSDictionary<string, any>): NSData;

	clearCaches(): void;

	createCGImageFromRect(image: CIImage, fromRect: CGRect): any;

	createCGImageFromRectFormatColorSpace(image: CIImage, fromRect: CGRect, format: number, colorSpace: any): any;

	createCGImageFromRectFormatColorSpaceDeferred(image: CIImage, fromRect: CGRect, format: number, colorSpace: any, deferred: boolean): any;

	depthBlurEffectFilterForImageDataOptions(data: NSData, options: NSDictionary<any, any>): CIFilter;

	depthBlurEffectFilterForImageDisparityImagePortraitEffectsMatteOrientationOptions(image: CIImage, disparityImage: CIImage, portraitEffectsMatte: CIImage, orientation: CGImagePropertyOrientation, options: NSDictionary<any, any>): CIFilter;

	depthBlurEffectFilterForImageURLOptions(url: NSURL, options: NSDictionary<any, any>): CIFilter;

	drawImageAtPointFromRect(image: CIImage, atPoint: CGPoint, fromRect: CGRect): void;

	drawImageInRectFromRect(image: CIImage, inRect: CGRect, fromRect: CGRect): void;

	initWithOptions(options: NSDictionary<string, any>): this;

	inputImageMaximumSize(): CGSize;

	outputImageMaximumSize(): CGSize;

	prepareRenderFromRectToDestinationAtPointError(image: CIImage, fromRect: CGRect, destination: CIRenderDestination, atPoint: CGPoint): boolean;

	renderToBitmapRowBytesBoundsFormatColorSpace(image: CIImage, data: interop.Pointer | interop.Reference<any>, rowBytes: number, bounds: CGRect, format: number, colorSpace: any): void;

	renderToCVPixelBuffer(image: CIImage, buffer: any): void;

	renderToCVPixelBufferBoundsColorSpace(image: CIImage, buffer: any, bounds: CGRect, colorSpace: any): void;

	renderToMTLTextureCommandBufferBoundsColorSpace(image: CIImage, texture: MTLTexture, commandBuffer: MTLCommandBuffer, bounds: CGRect, colorSpace: any): void;

	startTaskToClearError(destination: CIRenderDestination): CIRenderTask;

	startTaskToRenderFromRectToDestinationAtPointError(image: CIImage, fromRect: CGRect, destination: CIRenderDestination, atPoint: CGPoint): CIRenderTask;

	startTaskToRenderToDestinationError(image: CIImage, destination: CIRenderDestination): CIRenderTask;

	writeHEIFRepresentationOfImageToURLFormatColorSpaceOptionsError(image: CIImage, url: NSURL, format: number, colorSpace: any, options: NSDictionary<string, any>): boolean;

	writeJPEGRepresentationOfImageToURLColorSpaceOptionsError(image: CIImage, url: NSURL, colorSpace: any, options: NSDictionary<string, any>): boolean;

	writePNGRepresentationOfImageToURLFormatColorSpaceOptionsError(image: CIImage, url: NSURL, format: number, colorSpace: any, options: NSDictionary<string, any>): boolean;

	writeTIFFRepresentationOfImageToURLFormatColorSpaceOptionsError(image: CIImage, url: NSURL, format: number, colorSpace: any, options: NSDictionary<string, any>): boolean;
}

declare class CIDataMatrixCodeDescriptor extends CIBarcodeDescriptor {

	static alloc(): CIDataMatrixCodeDescriptor; // inherited from NSObject

	static descriptorWithPayloadRowCountColumnCountEccVersion(errorCorrectedPayload: NSData, rowCount: number, columnCount: number, eccVersion: CIDataMatrixCodeECCVersion): CIDataMatrixCodeDescriptor;

	static new(): CIDataMatrixCodeDescriptor; // inherited from NSObject

	readonly columnCount: number;

	readonly eccVersion: CIDataMatrixCodeECCVersion;

	readonly errorCorrectedPayload: NSData;

	readonly rowCount: number;

	constructor(o: { payload: NSData; rowCount: number; columnCount: number; eccVersion: CIDataMatrixCodeECCVersion; });

	initWithPayloadRowCountColumnCountEccVersion(errorCorrectedPayload: NSData, rowCount: number, columnCount: number, eccVersion: CIDataMatrixCodeECCVersion): this;
}

declare const enum CIDataMatrixCodeECCVersion {

	Version000 = 0,

	Version050 = 50,

	Version080 = 80,

	Version100 = 100,

	Version140 = 140,

	Version200 = 200
}

declare class CIDetector extends NSObject {

	static alloc(): CIDetector; // inherited from NSObject

	static detectorOfTypeContextOptions(type: string, context: CIContext, options: NSDictionary<string, any>): CIDetector;

	static new(): CIDetector; // inherited from NSObject

	featuresInImage(image: CIImage): NSArray<CIFeature>;

	featuresInImageOptions(image: CIImage, options: NSDictionary<string, any>): NSArray<CIFeature>;
}

declare var CIDetectorAccuracy: string;

declare var CIDetectorAccuracyHigh: string;

declare var CIDetectorAccuracyLow: string;

declare var CIDetectorAspectRatio: string;

declare var CIDetectorEyeBlink: string;

declare var CIDetectorFocalLength: string;

declare var CIDetectorImageOrientation: string;

declare var CIDetectorMaxFeatureCount: string;

declare var CIDetectorMinFeatureSize: string;

declare var CIDetectorNumberOfAngles: string;

declare var CIDetectorReturnSubFeatures: string;

declare var CIDetectorSmile: string;

declare var CIDetectorTracking: string;

declare var CIDetectorTypeFace: string;

declare var CIDetectorTypeQRCode: string;

declare var CIDetectorTypeRectangle: string;

declare var CIDetectorTypeText: string;

declare class CIFaceFeature extends CIFeature {

	static alloc(): CIFaceFeature; // inherited from NSObject

	static new(): CIFaceFeature; // inherited from NSObject

	readonly faceAngle: number;

	readonly hasFaceAngle: boolean;

	readonly hasLeftEyePosition: boolean;

	readonly hasMouthPosition: boolean;

	readonly hasRightEyePosition: boolean;

	readonly hasSmile: boolean;

	readonly hasTrackingFrameCount: boolean;

	readonly hasTrackingID: boolean;

	readonly leftEyeClosed: boolean;

	readonly leftEyePosition: CGPoint;

	readonly mouthPosition: CGPoint;

	readonly rightEyeClosed: boolean;

	readonly rightEyePosition: CGPoint;

	readonly trackingFrameCount: number;

	readonly trackingID: number;
}

declare class CIFeature extends NSObject {

	static alloc(): CIFeature; // inherited from NSObject

	static new(): CIFeature; // inherited from NSObject

	readonly bounds: CGRect;

	readonly type: string;
}

declare var CIFeatureTypeFace: string;

declare var CIFeatureTypeQRCode: string;

declare var CIFeatureTypeRectangle: string;

declare var CIFeatureTypeText: string;

declare class CIFilter extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CIFilter; // inherited from NSObject

	static filterArrayFromSerializedXMPInputImageExtentError(xmpData: NSData, extent: CGRect): NSArray<CIFilter>;

	static filterNamesInCategories(categories: NSArray<string>): NSArray<string>;

	static filterNamesInCategory(category: string): NSArray<string>;

	static filterWithCVPixelBufferPropertiesOptions(pixelBuffer: any, properties: NSDictionary<any, any>, options: NSDictionary<string, any>): CIFilter;

	static filterWithImageDataOptions(data: NSData, options: NSDictionary<string, any>): CIFilter;

	static filterWithImageURLOptions(url: NSURL, options: NSDictionary<string, any>): CIFilter;

	static filterWithName(name: string): CIFilter;

	static filterWithNameKeysAndValues(name: string, key0: any): CIFilter;

	static filterWithNameWithInputParameters(name: string, params: NSDictionary<string, any>): CIFilter;

	static localizedDescriptionForFilterName(filterName: string): string;

	static localizedNameForCategory(category: string): string;

	static localizedNameForFilterName(filterName: string): string;

	static localizedReferenceDocumentationForFilterName(filterName: string): NSURL;

	static new(): CIFilter; // inherited from NSObject

	static registerFilterNameConstructorClassAttributes(name: string, anObject: CIFilterConstructor, attributes: NSDictionary<string, any>): void;

	static serializedXMPFromFiltersInputImageExtent(filters: NSArray<CIFilter>, extent: CGRect): NSData;

	readonly attributes: NSDictionary<string, any>;

	readonly inputKeys: NSArray<string>;

	name: string;

	readonly outputImage: CIImage;

	readonly outputKeys: NSArray<string>;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	setDefaults(): void;

	setName(aString: string): void;
}

interface CIFilterConstructor {

	filterWithName(name: string): CIFilter;
}
declare var CIFilterConstructor: {

	prototype: CIFilterConstructor;
};

declare class CIFilterShape extends NSObject implements NSCopying {

	static alloc(): CIFilterShape; // inherited from NSObject

	static new(): CIFilterShape; // inherited from NSObject

	static shapeWithRect(r: CGRect): CIFilterShape;

	readonly extent: CGRect;

	constructor(o: { rect: CGRect; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithRect(r: CGRect): this;

	insetByXY(dx: number, dy: number): CIFilterShape;

	intersectWith(s2: CIFilterShape): CIFilterShape;

	intersectWithRect(r: CGRect): CIFilterShape;

	transformByInterior(m: CGAffineTransform, flag: boolean): CIFilterShape;

	unionWith(s2: CIFilterShape): CIFilterShape;

	unionWithRect(r: CGRect): CIFilterShape;
}

declare class CIImage extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CIImage; // inherited from NSObject

	static emptyImage(): CIImage;

	static imageWithBitmapDataBytesPerRowSizeFormatColorSpace(data: NSData, bytesPerRow: number, size: CGSize, format: number, colorSpace: any): CIImage;

	static imageWithCGImage(image: any): CIImage;

	static imageWithCGImageOptions(image: any, options: NSDictionary<string, any>): CIImage;

	static imageWithCVImageBuffer(imageBuffer: any): CIImage;

	static imageWithCVImageBufferOptions(imageBuffer: any, options: NSDictionary<string, any>): CIImage;

	static imageWithCVPixelBuffer(pixelBuffer: any): CIImage;

	static imageWithCVPixelBufferOptions(pixelBuffer: any, options: NSDictionary<string, any>): CIImage;

	static imageWithColor(color: CIColor): CIImage;

	static imageWithContentsOfURL(url: NSURL): CIImage;

	static imageWithContentsOfURLOptions(url: NSURL, options: NSDictionary<string, any>): CIImage;

	static imageWithData(data: NSData): CIImage;

	static imageWithDataOptions(data: NSData, options: NSDictionary<string, any>): CIImage;

	static imageWithDepthData(data: AVDepthData): CIImage;

	static imageWithDepthDataOptions(data: AVDepthData, options: NSDictionary<string, any>): CIImage;

	static imageWithImageProviderSizeFormatColorSpaceOptions(p: any, width: number, height: number, f: number, cs: any, options: NSDictionary<string, any>): CIImage;

	static imageWithMTLTextureOptions(texture: MTLTexture, options: NSDictionary<string, any>): CIImage;

	static imageWithPortaitEffectsMatte(matte: AVPortraitEffectsMatte): CIImage;

	static imageWithPortaitEffectsMatteOptions(matte: AVPortraitEffectsMatte, options: NSDictionary<string, any>): CIImage;

	static imageWithTextureSizeFlippedColorSpace(name: number, size: CGSize, flipped: boolean, colorSpace: any): CIImage;

	static new(): CIImage; // inherited from NSObject

	readonly CGImage: any;

	readonly colorSpace: any;

	readonly depthData: AVDepthData;

	readonly extent: CGRect;

	readonly pixelBuffer: any;

	readonly portraitEffectsMatte: AVPortraitEffectsMatte;

	readonly properties: NSDictionary<string, any>;

	readonly url: NSURL;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { bitmapData: NSData; bytesPerRow: number; size: CGSize; format: number; colorSpace: any; });

	constructor(o: { CGImage: any; });

	constructor(o: { CGImage: any; options: NSDictionary<string, any>; });

	constructor(o: { CVImageBuffer: any; });

	constructor(o: { CVImageBuffer: any; options: NSDictionary<string, any>; });

	constructor(o: { CVPixelBuffer: any; });

	constructor(o: { CVPixelBuffer: any; options: NSDictionary<string, any>; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { color: CIColor; });

	constructor(o: { contentsOfURL: NSURL; });

	constructor(o: { contentsOfURL: NSURL; options: NSDictionary<string, any>; });

	constructor(o: { data: NSData; });

	constructor(o: { data: NSData; options: NSDictionary<string, any>; });

	constructor(o: { depthData: AVDepthData; });

	constructor(o: { depthData: AVDepthData; options: NSDictionary<string, any>; });

	constructor(o: { image: UIImage; });

	constructor(o: { image: UIImage; options: NSDictionary<string, any>; });

	constructor(o: { imageProvider: any; size: number; format: number; colorSpace: number; options: any; });

	constructor(o: { MTLTexture: MTLTexture; options: NSDictionary<string, any>; });

	constructor(o: { portaitEffectsMatte: AVPortraitEffectsMatte; });

	constructor(o: { portaitEffectsMatte: AVPortraitEffectsMatte; options: NSDictionary<string, any>; });

	constructor(o: { texture: number; size: CGSize; flipped: boolean; colorSpace: any; });

	autoAdjustmentFilters(): NSArray<CIFilter>;

	autoAdjustmentFiltersWithOptions(options: NSDictionary<string, any>): NSArray<CIFilter>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	imageByApplyingCGOrientation(orientation: CGImagePropertyOrientation): CIImage;

	imageByApplyingFilter(filterName: string): CIImage;

	imageByApplyingFilterWithInputParameters(filterName: string, params: NSDictionary<string, any>): CIImage;

	imageByApplyingGaussianBlurWithSigma(sigma: number): CIImage;

	imageByApplyingOrientation(orientation: number): CIImage;

	imageByApplyingTransform(matrix: CGAffineTransform): CIImage;

	imageByClampingToExtent(): CIImage;

	imageByClampingToRect(rect: CGRect): CIImage;

	imageByColorMatchingColorSpaceToWorkingSpace(colorSpace: any): CIImage;

	imageByColorMatchingWorkingSpaceToColorSpace(colorSpace: any): CIImage;

	imageByCompositingOverImage(dest: CIImage): CIImage;

	imageByCroppingToRect(rect: CGRect): CIImage;

	imageByInsertingIntermediate(cache: boolean): CIImage;

	imageByPremultiplyingAlpha(): CIImage;

	imageBySamplingLinear(): CIImage;

	imageBySamplingNearest(): CIImage;

	imageBySettingAlphaOneInExtent(extent: CGRect): CIImage;

	imageBySettingProperties(properties: NSDictionary<any, any>): CIImage;

	imageByUnpremultiplyingAlpha(): CIImage;

	imageTransformForCGOrientation(orientation: CGImagePropertyOrientation): CGAffineTransform;

	imageTransformForOrientation(orientation: number): CGAffineTransform;

	initWithBitmapDataBytesPerRowSizeFormatColorSpace(data: NSData, bytesPerRow: number, size: CGSize, format: number, colorSpace: any): this;

	initWithCGImage(image: any): this;

	initWithCGImageOptions(image: any, options: NSDictionary<string, any>): this;

	initWithCVImageBuffer(imageBuffer: any): this;

	initWithCVImageBufferOptions(imageBuffer: any, options: NSDictionary<string, any>): this;

	initWithCVPixelBuffer(pixelBuffer: any): this;

	initWithCVPixelBufferOptions(pixelBuffer: any, options: NSDictionary<string, any>): this;

	initWithCoder(aDecoder: NSCoder): this;

	initWithColor(color: CIColor): this;

	initWithContentsOfURL(url: NSURL): this;

	initWithContentsOfURLOptions(url: NSURL, options: NSDictionary<string, any>): this;

	initWithData(data: NSData): this;

	initWithDataOptions(data: NSData, options: NSDictionary<string, any>): this;

	initWithDepthData(data: AVDepthData): this;

	initWithDepthDataOptions(data: AVDepthData, options: NSDictionary<string, any>): this;

	initWithImage(image: UIImage): this;

	initWithImageOptions(image: UIImage, options: NSDictionary<string, any>): this;

	initWithImageProviderSizeFormatColorSpaceOptions(p: any, width: number, height: number, f: number, cs: any, options: NSDictionary<string, any>): this;

	initWithMTLTextureOptions(texture: MTLTexture, options: NSDictionary<string, any>): this;

	initWithPortaitEffectsMatte(matte: AVPortraitEffectsMatte): this;

	initWithPortaitEffectsMatteOptions(matte: AVPortraitEffectsMatte, options: NSDictionary<string, any>): this;

	initWithTextureSizeFlippedColorSpace(name: number, size: CGSize, flipped: boolean, colorSpace: any): this;

	regionOfInterestForImageInRect(image: CIImage, rect: CGRect): CGRect;
}

declare class CIImageAccumulator extends NSObject {

	static alloc(): CIImageAccumulator; // inherited from NSObject

	static imageAccumulatorWithExtentFormat(extent: CGRect, format: number): CIImageAccumulator;

	static imageAccumulatorWithExtentFormatColorSpace(extent: CGRect, format: number, colorSpace: any): CIImageAccumulator;

	static new(): CIImageAccumulator; // inherited from NSObject

	readonly extent: CGRect;

	readonly format: number;

	constructor(o: { extent: CGRect; format: number; });

	constructor(o: { extent: CGRect; format: number; colorSpace: any; });

	clear(): void;

	image(): CIImage;

	initWithExtentFormat(extent: CGRect, format: number): this;

	initWithExtentFormatColorSpace(extent: CGRect, format: number, colorSpace: any): this;

	setImage(image: CIImage): void;

	setImageDirtyRect(image: CIImage, dirtyRect: CGRect): void;
}

interface CIImageProcessorInput {

	baseAddress: interop.Pointer | interop.Reference<any>;

	bytesPerRow: number;

	format: number;

	metalTexture: MTLTexture;

	pixelBuffer: any;

	region: CGRect;
}
declare var CIImageProcessorInput: {

	prototype: CIImageProcessorInput;
};

declare class CIImageProcessorKernel extends NSObject {

	static alloc(): CIImageProcessorKernel; // inherited from NSObject

	static applyWithExtentInputsArgumentsError(extent: CGRect, inputs: NSArray<CIImage>, args: NSDictionary<string, any>): CIImage;

	static formatForInputAtIndex(input: number): number;

	static new(): CIImageProcessorKernel; // inherited from NSObject

	static processWithInputsArgumentsOutputError(inputs: NSArray<CIImageProcessorInput>, _arguments: NSDictionary<string, any>, output: CIImageProcessorOutput): boolean;

	static roiForInputArgumentsOutputRect(input: number, _arguments: NSDictionary<string, any>, outputRect: CGRect): CGRect;

	static readonly outputFormat: number;

	static readonly outputIsOpaque: boolean;

	static readonly synchronizeInputs: boolean;
}

interface CIImageProcessorOutput {

	baseAddress: interop.Pointer | interop.Reference<any>;

	bytesPerRow: number;

	format: number;

	metalCommandBuffer: MTLCommandBuffer;

	metalTexture: MTLTexture;

	pixelBuffer: any;

	region: CGRect;
}
declare var CIImageProcessorOutput: {

	prototype: CIImageProcessorOutput;
};

declare class CIKernel extends NSObject {

	static alloc(): CIKernel; // inherited from NSObject

	static kernelWithFunctionNameFromMetalLibraryDataError(name: string, data: NSData): CIKernel;

	static kernelWithFunctionNameFromMetalLibraryDataOutputPixelFormatError(name: string, data: NSData, format: number): CIKernel;

	static kernelWithString(string: string): CIKernel;

	static kernelsWithString(string: string): NSArray<CIKernel>;

	static new(): CIKernel; // inherited from NSObject

	readonly name: string;

	applyWithExtentRoiCallbackArguments(extent: CGRect, callback: (p1: number, p2: CGRect) => CGRect, args: NSArray<any>): CIImage;

	setROISelector(method: string): void;
}

declare class CIPDF417CodeDescriptor extends CIBarcodeDescriptor {

	static alloc(): CIPDF417CodeDescriptor; // inherited from NSObject

	static descriptorWithPayloadIsCompactRowCountColumnCount(errorCorrectedPayload: NSData, isCompact: boolean, rowCount: number, columnCount: number): CIPDF417CodeDescriptor;

	static new(): CIPDF417CodeDescriptor; // inherited from NSObject

	readonly columnCount: number;

	readonly errorCorrectedPayload: NSData;

	readonly isCompact: boolean;

	readonly rowCount: number;

	constructor(o: { payload: NSData; isCompact: boolean; rowCount: number; columnCount: number; });

	initWithPayloadIsCompactRowCountColumnCount(errorCorrectedPayload: NSData, isCompact: boolean, rowCount: number, columnCount: number): this;
}

declare class CIQRCodeDescriptor extends CIBarcodeDescriptor {

	static alloc(): CIQRCodeDescriptor; // inherited from NSObject

	static descriptorWithPayloadSymbolVersionMaskPatternErrorCorrectionLevel(errorCorrectedPayload: NSData, symbolVersion: number, maskPattern: number, errorCorrectionLevel: CIQRCodeErrorCorrectionLevel): CIQRCodeDescriptor;

	static new(): CIQRCodeDescriptor; // inherited from NSObject

	readonly errorCorrectedPayload: NSData;

	readonly errorCorrectionLevel: CIQRCodeErrorCorrectionLevel;

	readonly maskPattern: number;

	readonly symbolVersion: number;

	constructor(o: { payload: NSData; symbolVersion: number; maskPattern: number; errorCorrectionLevel: CIQRCodeErrorCorrectionLevel; });

	initWithPayloadSymbolVersionMaskPatternErrorCorrectionLevel(errorCorrectedPayload: NSData, symbolVersion: number, maskPattern: number, errorCorrectionLevel: CIQRCodeErrorCorrectionLevel): this;
}

declare const enum CIQRCodeErrorCorrectionLevel {

	L = 76,

	M = 77,

	Q = 81,

	H = 72
}

declare class CIQRCodeFeature extends CIFeature implements NSCopying, NSSecureCoding {

	static alloc(): CIQRCodeFeature; // inherited from NSObject

	static new(): CIQRCodeFeature; // inherited from NSObject

	readonly bottomLeft: CGPoint;

	readonly bottomRight: CGPoint;

	readonly messageString: string;

	readonly symbolDescriptor: CIQRCodeDescriptor;

	readonly topLeft: CGPoint;

	readonly topRight: CGPoint;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class CIRectangleFeature extends CIFeature {

	static alloc(): CIRectangleFeature; // inherited from NSObject

	static new(): CIRectangleFeature; // inherited from NSObject

	readonly bottomLeft: CGPoint;

	readonly bottomRight: CGPoint;

	readonly topLeft: CGPoint;

	readonly topRight: CGPoint;
}

declare class CIRenderDestination extends NSObject {

	static alloc(): CIRenderDestination; // inherited from NSObject

	static new(): CIRenderDestination; // inherited from NSObject

	alphaMode: CIRenderDestinationAlphaMode;

	blendKernel: CIBlendKernel;

	blendsInDestinationColorSpace: boolean;

	clamped: boolean;

	colorSpace: any;

	dithered: boolean;

	flipped: boolean;

	readonly height: number;

	readonly width: number;

	constructor(o: { bitmapData: interop.Pointer | interop.Reference<any>; width: number; height: number; bytesPerRow: number; format: number; });

	constructor(o: { GLTexture: number; target: number; width: number; height: number; });

	constructor(o: { MTLTexture: MTLTexture; commandBuffer: MTLCommandBuffer; });

	constructor(o: { pixelBuffer: any; });

	constructor(o: { width: number; height: number; pixelFormat: MTLPixelFormat; commandBuffer: MTLCommandBuffer; mtlTextureProvider: () => MTLTexture; });

	initWithBitmapDataWidthHeightBytesPerRowFormat(data: interop.Pointer | interop.Reference<any>, width: number, height: number, bytesPerRow: number, format: number): this;

	initWithGLTextureTargetWidthHeight(texture: number, target: number, width: number, height: number): this;

	initWithMTLTextureCommandBuffer(texture: MTLTexture, commandBuffer: MTLCommandBuffer): this;

	initWithPixelBuffer(pixelBuffer: any): this;

	initWithWidthHeightPixelFormatCommandBufferMtlTextureProvider(width: number, height: number, pixelFormat: MTLPixelFormat, commandBuffer: MTLCommandBuffer, block: () => MTLTexture): this;
}

declare const enum CIRenderDestinationAlphaMode {

	None = 0,

	Premultiplied = 1,

	Unpremultiplied = 2
}

declare class CIRenderInfo extends NSObject {

	static alloc(): CIRenderInfo; // inherited from NSObject

	static new(): CIRenderInfo; // inherited from NSObject

	readonly kernelExecutionTime: number;

	readonly passCount: number;

	readonly pixelsProcessed: number;
}

declare class CIRenderTask extends NSObject {

	static alloc(): CIRenderTask; // inherited from NSObject

	static new(): CIRenderTask; // inherited from NSObject

	waitUntilCompletedAndReturnError(): CIRenderInfo;
}

declare class CISampler extends NSObject implements NSCopying {

	static alloc(): CISampler; // inherited from NSObject

	static new(): CISampler; // inherited from NSObject

	static samplerWithImage(im: CIImage): CISampler;

	static samplerWithImageKeysAndValues(im: CIImage, key0: any): CISampler;

	static samplerWithImageOptions(im: CIImage, dict: NSDictionary<any, any>): CISampler;

	readonly definition: CIFilterShape;

	readonly extent: CGRect;

	constructor(o: { image: CIImage; });

	constructor(o: { image: CIImage; options: NSDictionary<any, any>; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithImage(im: CIImage): this;

	initWithImageOptions(im: CIImage, dict: NSDictionary<any, any>): this;
}

declare class CITextFeature extends CIFeature {

	static alloc(): CITextFeature; // inherited from NSObject

	static new(): CITextFeature; // inherited from NSObject

	readonly bottomLeft: CGPoint;

	readonly bottomRight: CGPoint;

	readonly subFeatures: NSArray<any>;

	readonly topLeft: CGPoint;

	readonly topRight: CGPoint;
}

declare class CIVector extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): CIVector; // inherited from NSObject

	static new(): CIVector; // inherited from NSObject

	static vectorWithCGAffineTransform(t: CGAffineTransform): CIVector;

	static vectorWithCGPoint(p: CGPoint): CIVector;

	static vectorWithCGRect(r: CGRect): CIVector;

	static vectorWithString(representation: string): CIVector;

	static vectorWithValuesCount(values: interop.Pointer | interop.Reference<number>, count: number): CIVector;

	static vectorWithX(x: number): CIVector;

	static vectorWithXY(x: number, y: number): CIVector;

	static vectorWithXYZ(x: number, y: number, z: number): CIVector;

	static vectorWithXYZW(x: number, y: number, z: number, w: number): CIVector;

	readonly CGAffineTransformValue: CGAffineTransform;

	readonly CGPointValue: CGPoint;

	readonly CGRectValue: CGRect;

	readonly W: number;

	readonly X: number;

	readonly Y: number;

	readonly Z: number;

	readonly count: number;

	readonly stringRepresentation: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { CGAffineTransform: CGAffineTransform; });

	constructor(o: { CGPoint: CGPoint; });

	constructor(o: { CGRect: CGRect; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { string: string; });

	constructor(o: { values: interop.Pointer | interop.Reference<number>; count: number; });

	constructor(o: { x: number; });

	constructor(o: { x: number; y: number; });

	constructor(o: { x: number; y: number; z: number; });

	constructor(o: { x: number; y: number; z: number; w: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCGAffineTransform(r: CGAffineTransform): this;

	initWithCGPoint(p: CGPoint): this;

	initWithCGRect(r: CGRect): this;

	initWithCoder(aDecoder: NSCoder): this;

	initWithString(representation: string): this;

	initWithValuesCount(values: interop.Pointer | interop.Reference<number>, count: number): this;

	initWithX(x: number): this;

	initWithXY(x: number, y: number): this;

	initWithXYZ(x: number, y: number, z: number): this;

	initWithXYZW(x: number, y: number, z: number, w: number): this;

	valueAtIndex(index: number): number;
}

declare class CIWarpKernel extends CIKernel {

	static alloc(): CIWarpKernel; // inherited from NSObject

	static kernelWithFunctionNameFromMetalLibraryDataError(name: string, data: NSData): CIWarpKernel; // inherited from CIKernel

	static kernelWithFunctionNameFromMetalLibraryDataOutputPixelFormatError(name: string, data: NSData, format: number): CIWarpKernel; // inherited from CIKernel

	static kernelWithString(string: string): CIWarpKernel; // inherited from CIKernel

	static new(): CIWarpKernel; // inherited from NSObject

	applyWithExtentRoiCallbackInputImageArguments(extent: CGRect, callback: (p1: number, p2: CGRect) => CGRect, image: CIImage, args: NSArray<any>): CIImage;
}

declare var kCIActiveKeys: string;

declare var kCIAttributeClass: string;

declare var kCIAttributeDefault: string;

declare var kCIAttributeDescription: string;

declare var kCIAttributeDisplayName: string;

declare var kCIAttributeFilterAvailable_Mac: string;

declare var kCIAttributeFilterAvailable_iOS: string;

declare var kCIAttributeFilterCategories: string;

declare var kCIAttributeFilterDisplayName: string;

declare var kCIAttributeFilterName: string;

declare var kCIAttributeIdentity: string;

declare var kCIAttributeMax: string;

declare var kCIAttributeMin: string;

declare var kCIAttributeName: string;

declare var kCIAttributeReferenceDocumentation: string;

declare var kCIAttributeSliderMax: string;

declare var kCIAttributeSliderMin: string;

declare var kCIAttributeType: string;

declare var kCIAttributeTypeAngle: string;

declare var kCIAttributeTypeBoolean: string;

declare var kCIAttributeTypeColor: string;

declare var kCIAttributeTypeCount: string;

declare var kCIAttributeTypeDistance: string;

declare var kCIAttributeTypeGradient: string;

declare var kCIAttributeTypeImage: string;

declare var kCIAttributeTypeInteger: string;

declare var kCIAttributeTypeOffset: string;

declare var kCIAttributeTypeOpaqueColor: string;

declare var kCIAttributeTypePosition: string;

declare var kCIAttributeTypePosition3: string;

declare var kCIAttributeTypeRectangle: string;

declare var kCIAttributeTypeScalar: string;

declare var kCIAttributeTypeTime: string;

declare var kCIAttributeTypeTransform: string;

declare var kCICategoryBlur: string;

declare var kCICategoryBuiltIn: string;

declare var kCICategoryColorAdjustment: string;

declare var kCICategoryColorEffect: string;

declare var kCICategoryCompositeOperation: string;

declare var kCICategoryDistortionEffect: string;

declare var kCICategoryFilterGenerator: string;

declare var kCICategoryGenerator: string;

declare var kCICategoryGeometryAdjustment: string;

declare var kCICategoryGradient: string;

declare var kCICategoryHalftoneEffect: string;

declare var kCICategoryHighDynamicRange: string;

declare var kCICategoryInterlaced: string;

declare var kCICategoryNonSquarePixels: string;

declare var kCICategoryReduction: string;

declare var kCICategorySharpen: string;

declare var kCICategoryStillImage: string;

declare var kCICategoryStylize: string;

declare var kCICategoryTileEffect: string;

declare var kCICategoryTransition: string;

declare var kCICategoryVideo: string;

declare var kCIContextCacheIntermediates: string;

declare var kCIContextHighQualityDownsample: string;

declare var kCIContextOutputColorSpace: string;

declare var kCIContextOutputPremultiplied: string;

declare var kCIContextPriorityRequestLow: string;

declare var kCIContextUseSoftwareRenderer: string;

declare var kCIContextWorkingColorSpace: string;

declare var kCIContextWorkingFormat: string;

declare var kCIFormatA16: number;

declare var kCIFormatA8: number;

declare var kCIFormatABGR8: number;

declare var kCIFormatARGB8: number;

declare var kCIFormatAf: number;

declare var kCIFormatAh: number;

declare var kCIFormatBGRA8: number;

declare var kCIFormatL16: number;

declare var kCIFormatL8: number;

declare var kCIFormatLA16: number;

declare var kCIFormatLA8: number;

declare var kCIFormatLAf: number;

declare var kCIFormatLAh: number;

declare var kCIFormatLf: number;

declare var kCIFormatLh: number;

declare var kCIFormatR16: number;

declare var kCIFormatR8: number;

declare var kCIFormatRG16: number;

declare var kCIFormatRG8: number;

declare var kCIFormatRGBA16: number;

declare var kCIFormatRGBA8: number;

declare var kCIFormatRGBAf: number;

declare var kCIFormatRGBAh: number;

declare var kCIFormatRGf: number;

declare var kCIFormatRGh: number;

declare var kCIFormatRf: number;

declare var kCIFormatRh: number;

declare var kCIImageApplyOrientationProperty: string;

declare var kCIImageAutoAdjustCrop: string;

declare var kCIImageAutoAdjustEnhance: string;

declare var kCIImageAutoAdjustFeatures: string;

declare var kCIImageAutoAdjustLevel: string;

declare var kCIImageAutoAdjustRedEye: string;

declare var kCIImageAuxiliaryDepth: string;

declare var kCIImageAuxiliaryDisparity: string;

declare var kCIImageAuxiliaryPortraitEffectsMatte: string;

declare var kCIImageColorSpace: string;

declare var kCIImageNearestSampling: string;

declare var kCIImageProperties: string;

declare var kCIImageProviderTileSize: string;

declare var kCIImageProviderUserInfo: string;

declare var kCIImageRepresentationAVDepthData: string;

declare var kCIImageRepresentationAVPortraitEffectsMatte: string;

declare var kCIImageRepresentationDepthImage: string;

declare var kCIImageRepresentationDisparityImage: string;

declare var kCIImageRepresentationPortraitEffectsMatteImage: string;

declare var kCIInputAllowDraftModeKey: string;

declare var kCIInputAmountKey: string;

declare var kCIInputAngleKey: string;

declare var kCIInputAspectRatioKey: string;

declare var kCIInputBackgroundImageKey: string;

declare var kCIInputBaselineExposureKey: string;

declare var kCIInputBiasKey: string;

declare var kCIInputBoostKey: string;

declare var kCIInputBoostShadowAmountKey: string;

declare var kCIInputBrightnessKey: string;

declare var kCIInputCenterKey: string;

declare var kCIInputColorKey: string;

declare var kCIInputColorNoiseReductionAmountKey: string;

declare var kCIInputContrastKey: string;

declare var kCIInputDecoderVersionKey: string;

declare var kCIInputDepthImageKey: string;

declare var kCIInputDisableGamutMapKey: string;

declare var kCIInputDisparityImageKey: string;

declare var kCIInputEVKey: string;

declare var kCIInputEnableChromaticNoiseTrackingKey: string;

declare var kCIInputEnableSharpeningKey: string;

declare var kCIInputEnableVendorLensCorrectionKey: string;

declare var kCIInputExtentKey: string;

declare var kCIInputGradientImageKey: string;

declare var kCIInputIgnoreImageOrientationKey: string;

declare var kCIInputImageKey: string;

declare var kCIInputImageOrientationKey: string;

declare var kCIInputIntensityKey: string;

declare var kCIInputLinearSpaceFilter: string;

declare var kCIInputLuminanceNoiseReductionAmountKey: string;

declare var kCIInputMaskImageKey: string;

declare var kCIInputMatteImageKey: string;

declare var kCIInputMoireAmountKey: string;

declare var kCIInputNeutralChromaticityXKey: string;

declare var kCIInputNeutralChromaticityYKey: string;

declare var kCIInputNeutralLocationKey: string;

declare var kCIInputNeutralTemperatureKey: string;

declare var kCIInputNeutralTintKey: string;

declare var kCIInputNoiseReductionAmountKey: string;

declare var kCIInputNoiseReductionContrastAmountKey: string;

declare var kCIInputNoiseReductionDetailAmountKey: string;

declare var kCIInputNoiseReductionSharpnessAmountKey: string;

declare var kCIInputRadiusKey: string;

declare var kCIInputRefractionKey: string;

declare var kCIInputSaturationKey: string;

declare var kCIInputScaleFactorKey: string;

declare var kCIInputScaleKey: string;

declare var kCIInputShadingImageKey: string;

declare var kCIInputSharpnessKey: string;

declare var kCIInputTargetImageKey: string;

declare var kCIInputTimeKey: string;

declare var kCIInputTransformKey: string;

declare var kCIInputVersionKey: string;

declare var kCIInputWeightsKey: string;

declare var kCIInputWidthKey: string;

declare var kCIOutputImageKey: string;

declare var kCIOutputNativeSizeKey: string;

declare var kCISamplerAffineMatrix: string;

declare var kCISamplerColorSpace: string;

declare var kCISamplerFilterLinear: string;

declare var kCISamplerFilterMode: string;

declare var kCISamplerFilterNearest: string;

declare var kCISamplerWrapBlack: string;

declare var kCISamplerWrapClamp: string;

declare var kCISamplerWrapMode: string;

declare var kCISupportedDecoderVersionsKey: string;

declare var kCIUIParameterSet: string;

declare var kCIUISetAdvanced: string;

declare var kCIUISetBasic: string;

declare var kCIUISetDevelopment: string;

declare var kCIUISetIntermediate: string;
