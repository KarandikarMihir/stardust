import * as common from 'test/specs/commonTests'
import GridRow from 'src/collections/Grid/GridRow'

describe('GridRow', () => {
  common.isConformant(GridRow)
  common.rendersChildren(GridRow)

  common.propKeyOnlyToClassName(GridRow, 'centered')
  common.propValueOnlyToClassName(GridRow, 'color')
  common.implementsColumnsProp(GridRow, false)
  common.propKeyAndValueToClassName(GridRow, 'only')
  common.propKeyAndValueToClassName(GridRow, 'reversed')
  common.propKeyOnlyToClassName(GridRow, 'stretched')
  common.implementsTextAlignProp(GridRow)
  common.implementsVerticalAlignProp(GridRow)
})
