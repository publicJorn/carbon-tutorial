import React, { useState } from 'react'
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderMenu,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNavMenu,
  SideNavMenuItem,
  SideNav,
  SideNavItems,
  SideNavLink,
  HeaderSideNavItems,
  HeaderPanel,
  Switcher,
  SwitcherItem,
  SwitcherDivider,
} from 'carbon-components-react'
import {
  Account20,
  Activity20,
  ChartBar20,
  AppSwitcher20,
} from '@carbon/icons-react'

const TutorialHeader = () => {
  const [switcherVisible, setSwitcherVisible] = useState(false)

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="IBM Platform Name">
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="">
              Cloudnatix
            </HeaderName>
            <HeaderNavigation aria-label="IBM [Platform]">
              <HeaderMenuItem href="#">Workloads</HeaderMenuItem>
              <HeaderMenuItem href="#">Clusters</HeaderMenuItem>
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="App Switcher"
                tooltipAlignment="end"
              >
                <AppSwitcher20
                  onClick={() => setSwitcherVisible(!switcherVisible)}
                />
              </HeaderGlobalAction>
            </HeaderGlobalBar>

            <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
              <SideNavItems>
                <HeaderSideNavItems hasDivider={true}>
                  <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                  <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                    <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                    <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                    <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                  </HeaderMenu>
                </HeaderSideNavItems>
                <SideNavMenu renderIcon={Account20} title="Account">
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu renderIcon={Activity20} title="Activity">
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                  <SideNavMenuItem href="javascript:void(0)">
                    Link
                  </SideNavMenuItem>
                </SideNavMenu>
                <SideNavLink renderIcon={ChartBar20} href="javascript:void(0)">
                  Charts
                </SideNavLink>
              </SideNavItems>
            </SideNav>

            <HeaderPanel aria-label="Header Panel" expanded={switcherVisible}>
              <Switcher aria-label="Switcher Container">
                <SwitcherItem isSelected aria-label="Link 1" href="#">
                  Link 1
                </SwitcherItem>
                <SwitcherDivider />
                <SwitcherItem href="#" aria-label="Link 2">
                  Link 2
                </SwitcherItem>
                <SwitcherItem href="#" aria-label="Link 3">
                  Link 3
                </SwitcherItem>
                <SwitcherItem href="#" aria-label="Link 4">
                  Link 4
                </SwitcherItem>
                <SwitcherItem href="#" aria-label="Link 5">
                  Link 5
                </SwitcherItem>
                <SwitcherDivider />
                <SwitcherItem href="#" aria-label="Link 6">
                  Link 6
                </SwitcherItem>
              </Switcher>
            </HeaderPanel>
          </Header>
        </>
      )}
    />
  )
}

export default TutorialHeader
