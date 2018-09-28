
declare var SQLiteVersionNumber: number;

declare var SQLiteVersionNumberVar: number;

declare var SQLiteVersionString: interop.Reference<number>;

declare var SQLiteVersionStringVar: interop.Reference<number>;

declare function _SQLiteRegisterTokenizer(db: interop.Pointer | interop.Reference<any>, module: string, tokenizer: string, callback: (p1: string, p2: interop.Pointer | interop.Reference<number>, p3: interop.Pointer | interop.Reference<number>) => string): number;
