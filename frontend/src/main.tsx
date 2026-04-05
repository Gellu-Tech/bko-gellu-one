import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TooltipProvider } from './components/ui/tooltip.tsx'
import './index.css'
import App from './App.tsx'
import { StyleguideLayout } from './pages/styleguide/layout.tsx'
import StyleguideHome from './pages/styleguide/page.tsx'
import SliderShowcase from './pages/styleguide/components/slider/page.tsx'
import TableShowcase from './pages/styleguide/components/table/page.tsx'
import TextareaShowcase from './pages/styleguide/components/textarea/page.tsx'
import ItemShowcase from './pages/styleguide/components/item/page.tsx'
import DataTableShowcase from './pages/styleguide/components/data-table/page.tsx'
import SwitchShowcase from './pages/styleguide/components/switch/page.tsx'
import TooltipShowcase from './pages/styleguide/components/tooltip/page.tsx'
import ChartShowcase from './pages/styleguide/components/chart/page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TooltipProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/styleguide" element={<StyleguideLayout />}>
          <Route index element={<StyleguideHome />} />
          <Route path="components/slider" element={<SliderShowcase />} />
          <Route path="components/table" element={<TableShowcase />} />
          <Route path="components/textarea" element={<TextareaShowcase />} />
          <Route path="components/item" element={<ItemShowcase />} />
          <Route path="components/data-table" element={<DataTableShowcase />} />
          <Route path="components/switch" element={<SwitchShowcase />} />
          <Route path="components/tooltip" element={<TooltipShowcase />} />
          <Route path="components/chart" element={<ChartShowcase />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </TooltipProvider>
  </StrictMode>,
)
