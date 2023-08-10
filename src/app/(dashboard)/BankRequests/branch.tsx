interface BranchProps {
    branchName: string;
    length?: number;
}
export const Branch = ({branchName, length}: BranchProps) => {
    return (
        <div>
            <h3 className="text-xl text-[#242627] font-normal">
                {branchName} branch 
                ({length})
            </h3>
        </div>
    )
}