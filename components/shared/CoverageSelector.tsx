import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const coverages = [
  { id: 'medical-2025', name: 'Medical 2025' },
  { id: 'medical-2024', name: 'Medical 2024' },
  { id: 'dental-2025', name: 'Dental 2025' },
  { id: 'vision-2025', name: 'Vision 2025' },
]

export function CoverageSelector() {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Current Coverage</label>
      <Select defaultValue={coverages[0].id}>
        <SelectTrigger>
          <SelectValue placeholder="Select Coverage" />
        </SelectTrigger>
        <SelectContent>
          {coverages.map((coverage) => (
            <SelectItem key={coverage.id} value={coverage.id}>
              {coverage.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}