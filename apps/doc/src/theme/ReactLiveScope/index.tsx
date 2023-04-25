import React, { useEffect, useState } from 'react'
import * as Ui from '@my/ui'
import { useColorMode } from "@docusaurus/theme-common";


const ReactLiveScope = {
  React,
  ...React,
  ...Ui,
  useColorMode,
}
export default ReactLiveScope
