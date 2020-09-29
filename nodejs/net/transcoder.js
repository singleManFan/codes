// 封包/拆包
class Transcoder {
    constructor() {
        this.packageHeaderLen = 4;
        this.serialNumber = 0;
        this.packageSerialNumberLen = 2;
    }

    /**
   * 编码
   * @param { Object } data Buffer 对象数据
   * @param { Int } serialNumber 包序号，客户端编码时自动生成，服务端解码之后在编码时需要传入解码的包序列号
   */
    encode(data, serialNumber) {
        // 转为N个字节长度的消息体
        const body = Buffer.from(data);

        // 4个字节
        const header = Buffer.alloc(this.packageHeaderLen);
        // 序列号2个字节
        header.writeInt16BE(serialNumber || this.serialNumber);
        // 消息体长度2个字节
        header.writeInt16BE(body.length, this.packageSerialNumberLen); // 跳过包序列号的前两位

        if (serialNumber === undefined) {
            this.serialNumber++;
        }

        // 合并成一个buffer，封包操作
        return Buffer.concat([header, body]);
    }

    /**
     * 解码
     * @param { Object } buffer 
     */
    decode(buffer) {
        // 拆包
        const header = buffer.slice(0, this.packageHeaderLen); // 获取包头，4字节长度
        const body = buffer.slice(this.packageHeaderLen); // 获取消息体

        return {
            serialNumber: header.readInt16BE(),
            bodyLength: header.readInt16BE(this.packageSerialNumberLen), // 因为编码阶段写入时跳过了前两位，解码同样也要跳过
            body: body.toString(), // 消息体直接转码为字符串格式输出
        }
    }

    /**
     * 获取包长度两种情况：
     * 1. 如果当前 buffer 长度数据小于包头，肯定不是一个完整的数据包，因此直接返回 0 不做处理（可能数据还未接收完等等）
     * 2. 否则返回这个完整的数据包长度
     * @param {*} buffer 
     */
    getPackageLength(buffer) {
        if (buffer.length < this.packageHeaderLen) {
            return 0;
        }

        return this.packageHeaderLen + buffer.readInt16BE(this.packageSerialNumberLen);
    }
}

module.exports = Transcoder;