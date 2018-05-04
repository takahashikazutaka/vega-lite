"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var encoding_1 = require("../src/encoding");
var log = require("../src/log");
describe('axis', function () {
    describe('normalizeEncoding', function () {
        it('should convert lat and long type to channels', function () {
            var encoding = encoding_1.normalizeEncoding({
                x: { field: 'a', type: 'longitude' },
                y: { field: 'b', type: 'latitude' },
                x2: { field: 'a2', type: 'longitude' },
                y2: { field: 'b2', type: 'latitude' }
            }, 'rule');
            chai_1.assert.deepEqual(encoding, {
                longitude: { field: 'a', type: 'quantitative' },
                latitude: { field: 'b', type: 'quantitative' },
                longitude2: { field: 'a2', type: 'quantitative' },
                latitude2: { field: 'b2', type: 'quantitative' }
            });
        });
        it('should drop color channel if fill is specified', log.wrap(function (logger) {
            var encoding = encoding_1.normalizeEncoding({
                color: { field: 'a', type: 'quantitative' },
                fill: { field: 'b', type: 'quantitative' }
            }, 'rule');
            chai_1.assert.deepEqual(encoding, {
                fill: { field: 'b', type: 'quantitative' }
            });
            chai_1.assert.equal(logger.warns[0], log.message.droppingColor('encoding', { fill: true }));
        }));
        it('should drop color channel if stroke is specified', log.wrap(function (logger) {
            var encoding = encoding_1.normalizeEncoding({
                color: { field: 'a', type: 'quantitative' },
                stroke: { field: 'b', type: 'quantitative' }
            }, 'rule');
            chai_1.assert.deepEqual(encoding, {
                stroke: { field: 'b', type: 'quantitative' }
            });
            chai_1.assert.equal(logger.warns[0], log.message.droppingColor('encoding', { stroke: true }));
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2RpbmcudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvZW5jb2RpbmcudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUE0QjtBQUM1Qiw0Q0FBa0Q7QUFDbEQsZ0NBQWtDO0FBRWxDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7SUFDZixRQUFRLENBQUMsbUJBQW1CLEVBQUU7UUFDNUIsRUFBRSxDQUFDLDhDQUE4QyxFQUFFO1lBQ2pELElBQU0sUUFBUSxHQUFHLDRCQUFpQixDQUFDO2dCQUNqQyxDQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7Z0JBQ2xDLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztnQkFDakMsRUFBRSxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO2dCQUNwQyxFQUFFLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7YUFDcEMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUVYLGFBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO2dCQUN6QixTQUFTLEVBQUUsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUM7Z0JBQzdDLFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBQztnQkFDNUMsVUFBVSxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO2dCQUMvQyxTQUFTLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUM7YUFDL0MsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsZ0RBQWdELEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDbkUsSUFBTSxRQUFRLEdBQUcsNEJBQWlCLENBQUM7Z0JBQ2pDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBQztnQkFDekMsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO2FBQ3pDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFWCxhQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtnQkFDekIsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO2FBQ3pDLENBQUMsQ0FBQztZQUNILGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFSixFQUFFLENBQUMsa0RBQWtELEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDckUsSUFBTSxRQUFRLEdBQUcsNEJBQWlCLENBQUM7Z0JBQ2pDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBQztnQkFDekMsTUFBTSxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO2FBQzNDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFWCxhQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtnQkFDekIsTUFBTSxFQUFFLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO2FBQzNDLENBQUMsQ0FBQztZQUNILGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtub3JtYWxpemVFbmNvZGluZ30gZnJvbSAnLi4vc3JjL2VuY29kaW5nJztcbmltcG9ydCAqIGFzIGxvZyBmcm9tICcuLi9zcmMvbG9nJztcblxuZGVzY3JpYmUoJ2F4aXMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdub3JtYWxpemVFbmNvZGluZycsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGNvbnZlcnQgbGF0IGFuZCBsb25nIHR5cGUgdG8gY2hhbm5lbHMnLCAoKSA9PiB7XG4gICAgICBjb25zdCBlbmNvZGluZyA9IG5vcm1hbGl6ZUVuY29kaW5nKHtcbiAgICAgICAgeDoge2ZpZWxkOiAnYScsIHR5cGU6ICdsb25naXR1ZGUnfSxcbiAgICAgICAgeToge2ZpZWxkOiAnYicsIHR5cGU6ICdsYXRpdHVkZSd9LFxuICAgICAgICB4Mjoge2ZpZWxkOiAnYTInLCB0eXBlOiAnbG9uZ2l0dWRlJ30sXG4gICAgICAgIHkyOiB7ZmllbGQ6ICdiMicsIHR5cGU6ICdsYXRpdHVkZSd9XG4gICAgICB9LCAncnVsZScpO1xuXG4gICAgICBhc3NlcnQuZGVlcEVxdWFsKGVuY29kaW5nLCB7XG4gICAgICAgIGxvbmdpdHVkZToge2ZpZWxkOiAnYScsIHR5cGU6ICdxdWFudGl0YXRpdmUnfSxcbiAgICAgICAgbGF0aXR1ZGU6IHtmaWVsZDogJ2InLCB0eXBlOiAncXVhbnRpdGF0aXZlJ30sXG4gICAgICAgIGxvbmdpdHVkZTI6IHtmaWVsZDogJ2EyJywgdHlwZTogJ3F1YW50aXRhdGl2ZSd9LFxuICAgICAgICBsYXRpdHVkZTI6IHtmaWVsZDogJ2IyJywgdHlwZTogJ3F1YW50aXRhdGl2ZSd9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgZHJvcCBjb2xvciBjaGFubmVsIGlmIGZpbGwgaXMgc3BlY2lmaWVkJywgbG9nLndyYXAoKGxvZ2dlcikgPT4ge1xuICAgICAgY29uc3QgZW5jb2RpbmcgPSBub3JtYWxpemVFbmNvZGluZyh7XG4gICAgICAgIGNvbG9yOiB7ZmllbGQ6ICdhJywgdHlwZTogJ3F1YW50aXRhdGl2ZSd9LFxuICAgICAgICBmaWxsOiB7ZmllbGQ6ICdiJywgdHlwZTogJ3F1YW50aXRhdGl2ZSd9XG4gICAgICB9LCAncnVsZScpO1xuXG4gICAgICBhc3NlcnQuZGVlcEVxdWFsKGVuY29kaW5nLCB7XG4gICAgICAgIGZpbGw6IHtmaWVsZDogJ2InLCB0eXBlOiAncXVhbnRpdGF0aXZlJ31cbiAgICAgIH0pO1xuICAgICAgYXNzZXJ0LmVxdWFsKGxvZ2dlci53YXJuc1swXSwgbG9nLm1lc3NhZ2UuZHJvcHBpbmdDb2xvcignZW5jb2RpbmcnLCB7ZmlsbDogdHJ1ZX0pKTtcbiAgICB9KSk7XG5cbiAgICBpdCgnc2hvdWxkIGRyb3AgY29sb3IgY2hhbm5lbCBpZiBzdHJva2UgaXMgc3BlY2lmaWVkJywgbG9nLndyYXAoKGxvZ2dlcikgPT4ge1xuICAgICAgY29uc3QgZW5jb2RpbmcgPSBub3JtYWxpemVFbmNvZGluZyh7XG4gICAgICAgIGNvbG9yOiB7ZmllbGQ6ICdhJywgdHlwZTogJ3F1YW50aXRhdGl2ZSd9LFxuICAgICAgICBzdHJva2U6IHtmaWVsZDogJ2InLCB0eXBlOiAncXVhbnRpdGF0aXZlJ31cbiAgICAgIH0sICdydWxlJyk7XG5cbiAgICAgIGFzc2VydC5kZWVwRXF1YWwoZW5jb2RpbmcsIHtcbiAgICAgICAgc3Ryb2tlOiB7ZmllbGQ6ICdiJywgdHlwZTogJ3F1YW50aXRhdGl2ZSd9XG4gICAgICB9KTtcbiAgICAgIGFzc2VydC5lcXVhbChsb2dnZXIud2FybnNbMF0sIGxvZy5tZXNzYWdlLmRyb3BwaW5nQ29sb3IoJ2VuY29kaW5nJywge3N0cm9rZTogdHJ1ZX0pKTtcbiAgICB9KSk7XG4gIH0pO1xufSk7XG4iXX0=