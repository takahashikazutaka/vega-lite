"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var channel_1 = require("../../channel");
var encoding_1 = require("../../encoding");
var fielddef_1 = require("../../fielddef");
var type_1 = require("../../type");
var common_1 = require("../common");
var mixins = require("./mixins");
var ref = require("./valueref");
exports.text = {
    vgMark: 'text',
    defaultRole: undefined,
    encodeEntry: function (model) {
        var config = model.config, encoding = model.encoding, height = model.height;
        var textDef = encoding.text;
        return tslib_1.__assign({}, mixins.pointPosition('x', model, xDefault(config, textDef)), mixins.pointPosition('y', model, ref.midY(height, config)), mixins.text(model), mixins.color(model), mixins.text(model, 'tooltip'), mixins.nonPosition('opacity', model), mixins.nonPosition('size', model, {
            vgChannel: 'fontSize' // VL's text size is fontSize
        }), mixins.valueIfDefined('align', align(model.markDef, encoding, config)));
    }
};
function xDefault(config, textDef) {
    if (fielddef_1.isFieldDef(textDef) && textDef.type === type_1.QUANTITATIVE) {
        return { field: { group: 'width' }, offset: -5 };
    }
    // TODO: allow this to fit (Be consistent with ref.midX())
    return { value: config.scale.textXRangeStep / 2 };
}
function align(markDef, encoding, config) {
    var alignConfig = common_1.getMarkConfig('align', markDef, config);
    if (alignConfig === undefined) {
        return encoding_1.channelHasField(encoding, channel_1.X) ? 'center' : 'right';
    }
    // If there is a config, Vega-parser will process this already.
    return undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21waWxlL21hcmsvdGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBZ0M7QUFFaEMsMkNBQXlEO0FBQ3pELDJDQUFzRDtBQUV0RCxtQ0FBd0M7QUFFeEMsb0NBQXdDO0FBR3hDLGlDQUFtQztBQUNuQyxnQ0FBa0M7QUFHckIsUUFBQSxJQUFJLEdBQWlCO0lBQ2hDLE1BQU0sRUFBRSxNQUFNO0lBQ2QsV0FBVyxFQUFFLFNBQVM7SUFFdEIsV0FBVyxFQUFFLFVBQUMsS0FBZ0I7UUFDckIsSUFBQSxxQkFBTSxFQUFFLHlCQUFRLEVBQUUscUJBQU0sQ0FBVTtRQUN6QyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRTlCLE1BQU0sc0JBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFDM0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQ2xCLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUM3QixNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFDcEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ25DLFNBQVMsRUFBRSxVQUFVLENBQUUsNkJBQTZCO1NBQ3JELENBQUMsRUFDQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFDekU7SUFDSixDQUFDO0NBQ0YsQ0FBQztBQUVGLGtCQUFrQixNQUFjLEVBQUUsT0FBMkI7SUFDM0QsRUFBRSxDQUFDLENBQUMscUJBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLG1CQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsMERBQTBEO0lBQzFELE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsZUFBZSxPQUFnQixFQUFFLFFBQTBCLEVBQUUsTUFBYztJQUN6RSxJQUFNLFdBQVcsR0FBRyxzQkFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUQsRUFBRSxDQUFDLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLDBCQUFlLENBQUMsUUFBUSxFQUFFLFdBQUMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDM0QsQ0FBQztJQUNELCtEQUErRDtJQUMvRCxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQ25CLENBQUMifQ==